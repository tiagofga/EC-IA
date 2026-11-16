import argparse
from time import perf_counter

import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.ensemble import (
  AdaBoostClassifier, BaggingClassifier, GradientBoostingClassifier,
  RandomForestClassifier, StackingClassifier, VotingClassifier,
)
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
  accuracy_score, confusion_matrix, f1_score, precision_score, recall_score,
)
from sklearn.model_selection import StratifiedKFold, cross_validate, train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier


def models(seed, n):
  dt = DecisionTreeClassifier(random_state=seed)
  knn = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))
  svm = make_pipeline(StandardScaler(), SVC(probability=True, random_state=seed))
  base = [('dt', dt), ('knn', knn), ('svm', svm)]
  return {
    'DT': dt,
    'KNN': knn,
    'SVM': svm,
    'Voting hard': VotingClassifier(base, voting='hard'),
    'Voting soft': VotingClassifier(base, voting='soft'),
    'Bagging': BaggingClassifier(estimator=dt, n_estimators=n, random_state=seed),
    'Random Forest': RandomForestClassifier(n_estimators=n, random_state=seed),
    'AdaBoost': AdaBoostClassifier(n_estimators=n, random_state=seed),
    'Gradient Boosting': GradientBoostingClassifier(n_estimators=n, random_state=seed),
    'Stacking': StackingClassifier(
      base, final_estimator=LogisticRegression(max_iter=1000),
      cv=StratifiedKFold(5, shuffle=True, random_state=seed),
    ),
  }


def main():
  parser = argparse.ArgumentParser()
  parser.add_argument('--seed', type=int, default=42)
  parser.add_argument('--estimadores', type=int, default=50)
  parser.add_argument('--teste', action='store_true',
                      help='Avaliação final: use somente após congelar as escolhas.')
  args = parser.parse_args()
  data = load_breast_cancer()
  X, y = data.data, (data.target == 0).astype(int)
  X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=args.seed,
  )
  cv = StratifiedKFold(5, shuffle=True, random_state=args.seed)
  scoring = ['accuracy', 'precision', 'recall', 'f1']
  rows = []
  for name, model in models(args.seed, args.estimadores).items():
    result = cross_validate(model, X_train, y_train, cv=cv, scoring=scoring)
    row = {'modelo': name}
    for metric in scoring:
      scores = result['test_' + metric]
      row[metric] = scores.mean()
      row[metric + '_dp'] = scores.std()
    row['treino_s'] = result['fit_time'].mean()
    rows.append(row)
    if args.teste:
      start = perf_counter()
      model.fit(X_train, y_train)
      elapsed = perf_counter() - start
      pred = model.predict(X_test)
      print(name, 'teste:',
            [round(m(y_test, pred), 4) for m in (
              accuracy_score, precision_score, recall_score, f1_score)],
            'tempo (s):', round(elapsed, 4))
      print(confusion_matrix(y_test, pred, labels=[0, 1]))
  table = pd.DataFrame(rows)
  print(table.round(4).to_string(index=False))
  table.to_csv(f'cv_seed{args.seed}_n{args.estimadores}.csv', index=False)


if __name__ == '__main__':
  main()
