## 1. combineAll:

## 2. combineLatest: 
  **What**:

  **Why use this**:
  > 当有多个长期活动的 observables 且它们依靠彼此来进行一些计算或决定时，此操作符是最适合的
 
  **How use this**:

  见 combineLatest and combineAll.ts

  **Note**:
  > combineLatest 直到每个 observable 都至少发出一个值后才会发出初始值

## 区别- 个人理解：
  combineAll 用于合并一条主流拆分出来的多个小流，而combineLatest合并多个主流