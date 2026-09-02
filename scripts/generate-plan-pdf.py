#!/usr/bin/env python3
from pathlib import Path
from html import escape
import re

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'planos' / '2026-2' / 'plano-didatico.md'
OUTPUT = ROOT / 'site' / 'downloads' / 'planos' / 'Plano_Didatico_IA_2026_2.pdf'


def clean(text: str) -> str:
    text = re.sub(r'\*\*(.*?)\*\*', r'\1', text)
    text = text.replace('`', '')
    return text.strip()


def safe(text: str) -> str:
    return escape(clean(text))


def page_number(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica', 8)
    canvas.drawCentredString(A4[0] / 2, 0.8 * cm, f'Página {doc.page}')
    canvas.restoreState()


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    lines = SOURCE.read_text(encoding='utf-8').splitlines()

    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(
        name='CourseTitle',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        alignment=TA_CENTER,
        spaceAfter=14,
    ))
    styles.add(ParagraphStyle(
        name='Section',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        spaceBefore=8,
        spaceAfter=6,
    ))
    styles.add(ParagraphStyle(
        name='TableCell',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=7.6,
        leading=9.5,
    ))
    styles.add(ParagraphStyle(
        name='TableHeader',
        parent=styles['TableCell'],
        fontName='Helvetica-Bold',
    ))
    styles['BodyText'].fontSize = 9.5
    styles['BodyText'].leading = 13

    story = []
    i = 0
    while i < len(lines):
        line = lines[i].strip()

        if not line:
            story.append(Spacer(1, 4))
            i += 1
            continue

        if line.startswith('# '):
            story.append(Paragraph(safe(line[2:]), styles['CourseTitle']))
            i += 1
            continue

        if line.startswith('## '):
            story.append(Paragraph(safe(line[3:]), styles['Section']))
            i += 1
            continue

        if line.startswith('|'):
            rows = []
            while i < len(lines) and lines[i].strip().startswith('|'):
                raw = lines[i].strip()
                cells = [clean(cell) for cell in raw.strip('|').split('|')]
                separator = all(
                    re.fullmatch(r':?-{3,}:?', cell.replace(' ', ''))
                    for cell in cells
                )
                if not separator:
                    rows.append(cells)
                i += 1

            if rows:
                columns = max(len(r) for r in rows)
                normalized = [r + [''] * (columns - len(r)) for r in rows]
                rendered = []
                for row_index, row in enumerate(normalized):
                    style = styles['TableHeader'] if row_index == 0 else styles['TableCell']
                    rendered.append([Paragraph(escape(cell), style) for cell in row])

                available = A4[0] - 4 * cm
                if columns == 2:
                    widths = [3.2 * cm, available - 3.2 * cm]
                elif columns == 3:
                    widths = [available * 0.44, available * 0.38, available * 0.18]
                else:
                    widths = [available / columns] * columns

                table = Table(rendered, colWidths=widths, repeatRows=1)
                table.setStyle(TableStyle([
                    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#E9EEF5')),
                    ('GRID', (0, 0), (-1, -1), 0.35, colors.HexColor('#AAB2BD')),
                    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                    ('LEFTPADDING', (0, 0), (-1, -1), 4),
                    ('RIGHTPADDING', (0, 0), (-1, -1), 4),
                    ('TOPPADDING', (0, 0), (-1, -1), 3),
                    ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
                ]))
                story.append(table)
                story.append(Spacer(1, 6))
            continue

        if line.startswith('- '):
            story.append(Paragraph(f'- {safe(line[2:])}', styles['BodyText']))
            i += 1
            continue

        story.append(Paragraph(safe(line), styles['BodyText']))
        i += 1

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=2 * cm,
        leftMargin=2 * cm,
        topMargin=1.8 * cm,
        bottomMargin=1.5 * cm,
        title='Plano Didático - Inteligência Artificial - 2026/2',
        author='Tiago Alves de Oliveira',
    )
    doc.build(story, onFirstPage=page_number, onLaterPages=page_number)
    print(f'Plano didático em PDF gerado em: {OUTPUT}')


if __name__ == '__main__':
    main()
