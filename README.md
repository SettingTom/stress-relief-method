## アプリケーション名
 stress-relief-method

## アプリケーション概要
 書籍「超ストレス解消法 イライラが一瞬で消える100のメソッド」(出版：株式会社鉄人社 著者：鈴木祐)の第4章で紹介されている「即効性」に焦点を絞ったテクニックを選出し、それを実行することでストレス解消をする。

## URL
 https://stress-relief-method.herokuapp.com/

## 利用方法
### メソッド選択
 1.ヘッダーのメソッド一覧のいずれかか、ランダム選択をクリックする。

 2.特徴、実施方法、解説が記載されている詳細ページに遷移されるので、実施方法に従いストレス解消を試みる。

## アプリケーションを作成した背景
 ハーバードやスタンフォードなど一流の研究機関が実証した、科学的に正しいストレス解消法が世に沢山ある。
 その方法をまとめて解説しているのが書籍「超ストレス解消法 イライラが一瞬で消える100のメソッド」である。
 私の周囲には正しいストレス対策を知るものがいなかったことと、この書籍の内容を実践しやすいアプリが個人的に欲しいと思い、作成するに至った。

## 洗い出した要件
[要件を定義したシート](https://docs.google.com/spreadsheets/d/1FcoBSftfgA1gJI5tuhEEsCplqY7YogoQMGu0nKjEg-0/edit#gid=982722306)


## 実装した機能についての画像やGIFおよびその説明
 著者が「ランダムでメソッドを実行するのも手」と説明されていたので、ランダム選択機能を実装した(書籍の第4章)。
 また、全てではないが、各メソッドに本では実装できない機能を設けた。
 例えば、タイマー機能や温度計操作機能(ストレスサーモメーター)、実施方法をアニメーションでイメージしてもらう機能など。
 いずれも紙媒体では実装できない機能である。

 [![Image from Gyazo](https://i.gyazo.com/09950d7df47eafcf42c5aaf0a4bb8ef2.gif)](https://gyazo.com/09950d7df47eafcf42c5aaf0a4bb8ef2)
 

## 画面遷移図
 [![Image from Gyazo](https://i.gyazo.com/0341fc6fb3da544128339ef041d7e681.png)](https://gyazo.com/0341fc6fb3da544128339ef041d7e681)

## 開発環境
- ruby
- html
- css