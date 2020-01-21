## What is this

yoneda's profile site implement in react-redux.  
learning react-redux, css, and webdesign is main purpose.  
you can check my website :)  
https://yoneda.app

## how to run

```
npm install // install some modules
npm start // start app
```

## how to deploy on netlify manually

```
npm run build
netlify deploy --dir public // specify directory
netlify deploy --prod
```

alternatively, you can deploy with travisCI
```
git push
```

## task management
https://trello.com/b/GOhxeZCZ/portfolio2019

## learning log

#### emotion について
 - css はデフォルトでグローバルスコープだが、emotion ではローカルスコープとしてcssを出力してくれる。css の変数名で悩む必要がなくて良い。(例えばタイトルを出力するtitleコンポーネントで、文字のデザインをtitleStyleという変数名にしちゃっても良い！！スッキリ！BEM しなくていい！)
 * コンポーネント内にcss 記法で記述できて良い。css module ではcss ファイルを分けて読み込んでるため、動的にcssプロパティの値を変更しにくい。
 * webpack にcss 関係の設定をしなくても使えるので楽ちん
 * emotion を使いたいコンポーネントの最初にプラグマをつけるのがすこし気持ちわるい。純粋なReact コンポーネントではなくなっているかも。プラグマを使わずにBabel の設定でいい感じにする方法もあるみたい。


#### sketch について
 * sketch をつかってデザインをしたものをReact でコーディングするという作業を一通りした
 * sketch は、少なくともウェブデザインをするという用途ではすごく簡単。横1440px × 縦1024px のキャンバスをつくり、Shape(四角や丸や星型など)、Text(文字)、SVG(様々なグラフィック)などを配置するだけで何も難しくない。
 * uplabs にあがっているファイルをsketch やfigma で見ると、デザインの構造が視覚的にわかって勉強になる

#### デザインについて
 * ノンデザイナーズ・デザインブックを見て、整列、コントラスト、反復を意識してデザインをした。デザインを言語化する大事さを知った。
 * 整列(MoonButtonComponent, TitleComponent, DescriptionComponent, ProjectComponent, ContactComponentなどをすべて左側が揃うように縦一列に並べて、強い1本の線を描くようにした)
 * コントラスト(KoheiYoneda の文字だけ大きく、その他の文字を小さくしてメリハリをもたせた。)
 * 反復(ボタンはすべて丸で囲む、色を付ける場所はすべてdeeppinkで統一)

#### その他
* 今回はreducer で5つの状態を管理(dark, loading, moonbuttonpressed, posts, toggles)したが、1つのReducer で管理するには限界を感じた。Reducer を分割したほうが良い。
* ダークモードを導入するのに、2つのフラグが必要だった
* アニメーションをせずに白背景、アニメーションをして黒背景、アニメーションをして白背景の3パターンがある。
* 最後にアニメーションするかどうかのフラグ(moonbuttonpressed)を追加するとき、constant 内でタイポがあったが気づかなかった。ts導入してれば静的に型チェックしてくれるのでおそらくこのようなことはなかっただろう。ポートフォリオサイト以上の規模にしたい場合はtsかflowtypeが必須だと思った。
* SVG はファイルを読み込むよりタグ中に記述したほうが構造として綺麗
* SVG のスキルを今後も上げていきたい所存
* netlify でデプロイするときはpublic 配下を選択することを忘れない
* 本当はMoonButton やPlusButton に影をつけて、mouse hover で影が濃くなるようなエフェクトもつけたかった(sketch参照)が、時間がないためギブアップした
