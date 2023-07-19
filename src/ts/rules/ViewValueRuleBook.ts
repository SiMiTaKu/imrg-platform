import type { RuleBook, Chapter, Article, Section, Block } from "./RuleBookModel";

export const vvRuleBook: RuleBook = {
  title: "2015年  新体操男子規則", chapter: [{
    title: "競技規則", article: [{
      title: "総則", section: [{
        title:   "本規則の指針",
        content: "本規則は公益財団法人日本体操協会寄付行為第７章、男子新体操協会により協議会の組織運営・審判刑部の組織運営・研修・認定に関する指針となるものである。",
        block:   []
      } as Section, {
        title:   "本規則の改正",
        content: "本規則の改正は、男子新体操委員会で過半数を持って議決する。",
        block:   []
      } as Section]
    } as Article, {
      title: "協議会及び各種大会の組織", section: [{
        title:   "各種大会",
        content: "<ol>" +
                   "<li>【全日本選手権大会】\n毎年、男子および女子の「全日本新体操選手権大会」を組織する。この組織は（公財）日本体操協会で１加盟団体に委嘱される。</li>" +
                   "<li>【国民体育大会】\n国民体育大会の新体操競技の組織は、全日本選手権大会に準ずる。</li>" +
                   "<li>【国際競技大会】\n本協会は、適当と認める場合には国際競技会を組織することができる。その競技組織・運営の具体的計画は、ＦＩＧ諸規則に基づき男子新体操委員会で起案資本協会理事会の承認を受ける。</li>" +
                 "</ol>",
        block:   []
      } as Section, {
        title:   "各競技会場の場所",
        content: "本協会の監督下に組織される競技会および各種競技会は、目的に適した場所（体育館または競技場）で行わなければならない。",
        block:   []
      } as Section]
    } as Article, {
      title: "協議会及び各種大会の運営", section: [{
        title:   "組織協会の責任",
        content:
          "組織協会はその構成する組織委員会においても全責任をもつ。組織協会は宣伝および組織の全経費を負担する。その中につ美のものを含む。" +
          "<ol>" +
            "<li>必要な冊子および印刷物の印刷ならびに送付。</li>" +
            "<li>メダルおよび賞状の準備。</li>" +
            "<li>競技場および練習場の整理、練習および競技用として十分な数量の正式器械器具の準備。</li>" +
            "<li>伴奏音楽に必要な音響機器の準備。</li>" +
            "<li>競技会進行に必要な音響設備の準備。</li>" +
            "<li>競技会の順調な進行、特に掲示採点の伝達などに必要な人員の確保</li>" +
            "<li>計算作業、競技会経過中の成績および決定成績の公表、報道機関用書類の作成。組織委員会は、審判に必要な情報を提供し、業務を援助する。一般に組織委員会は、男子新体操委員会と連絡を密にし、必要な事項を処理する。</li>" +
          "</ol>",
        block:   []
      } as Section, {
        title:   "出場の申し込み",
        content:
          "出場申し込みは、所定の時期に本協会事務局から、各加盟団体に送付する様式、またはホームページに掲載された様式による。" +
          "<ol>" +
            "<li>出場申し込みは、本協会事務局に所定の申し込み用紙１部を指定された期日までに提出しなければならない。</li>" +
            "<li>競技者決定名簿の作成にあたっては、各競技者の登録番号、氏名、生年月日、出身地ならびに加盟団体所属登録会員であることを確認しなければならない。</li>" +
            "<li>出場申込書提出後、選手変更の必要が生じた場合には、書面で競技会の前日までに組織委員会に提出し監督者会議において確認する。ただし、監督者会議後においては申し込みされた選手でなければ交代できない。</li>" +
          "</ol>",
        block:   []
      } as Section, {
        title:   "規定演技の作成",
        content: "規定演技の協議を開催する場合は男子新体操委員会で作成し、競技の１２か月前に、本協会公式用語によって正確に加盟団体に連絡しなければならない。解説の補助手段として、演技ビデオや、図解を作成することがあるが、その内容に問題のある場合には、男子新体操委員会の公式解説文または公式ビデオによるものとする。",
        block:   []
      } as Section, {
        title:   "競技規則及び採点規則に定めない事項",
        content: "競技ならびに採点規則の定めない事項については、男子新体操委員会の責任者として服務する審判長と審判団がこれを決定し、それに対する抗議はできない。",
        block:   []
      } as Section, {
        title:   "旗・クラブ旗",
        content: "部旗（クラブ旗）は１枚を限度とし、大きさは４m<sup>2</sup>以内とする。ただし、掲示する場所は組織委員会の指定するところとする。",
        block:   []
      } as Section, {
        title:   "審判団の選定",
        content: "本協会の組織する競技会では、審判団は（公財）日本体操協会の作成する公認名簿に記載のものから選定する。競技の審判長および採点規則に定める主任審判員は、男子新体操委員会で任命する。審判団の詳細は、第２章採点規則第6条による。",
        block:   []
      } as Section, {
        title:   "競技部長の任命",
        content: "競技部長は、男子新体操委員会および組織委員会で協議の上にこれを任命し、審判長の指導のもとに競技場および記録部ならびに広報部における補佐員全部を監督指導する。会場係長は、競技部長と同様にしてこれを任命し、競技場、練習場の器械およびあらゆる施設の設備ならびに状態を監視する。",
        block:   []
      } as Section, {
        title:   "審判団・競技部長・会場係長の責務",
        content: "審判長・審判員・競技部長および会場係長は、上記の職責に完全に専任し、いかなる名目をもってもチームを指導し、競技に参加し、また他の任務を受諾することはできない。審判長・審判員および当該監督者は、競技開始１時間前に競技場に集合し、競技の進行順序・臨時の変更などについて通知を受ける。",
        block:   []
      } as Section, {
        title:   "裁定審判部の設置",
        content: "競技会は裁定審判部を設ける。裁定審判部は、競技会の期間およびその後に問題のある場合にこの処理にあたるもので、本協会会長または理事会の一役員・審判長・主任審判員および競技部長またはその代表者で構成する。",
        block:   []
      } as Section, {
        title:   "裁定審判部の裁決",
        content: "審判団および裁定審判部の裁決は、決定的で変更することができない。ただし実質的過失のあった場合はこの限りではない。",
        block:   []
      } as Section, {
        title:   "決定点の公開",
        content: "組織委員会は、決定点を公衆および競技者に示し得る装置を設置する。競技における、すべての採点に関する問題、特に審判団の編成・主任審判員の任務・演技採点・当初および途中の審判員の競技については、採点規則の示すところによる。",
        block:   []
      } as Section, {
        title:   "音響設備の準備",
        content: "組織委員会は伴奏音楽を使用するための音響機器を準備しなければならない。",
        block:   []
      } as Section, {
        title:   "審判会議および監督会議の開催",
        content: "組織委員会は、競技会の前日または前々日に審判会議と監督者会議を行う。この会議では、あらかじめ抽選で決定された出場チームおよび個人の演技順を承認し、競技会の順調な進行に関する最終の指示を与える。",
        block:   []
      } as Section, {
        title:   "採点表の写しと全記録",
        content: "採点表の写しは、できるだけ各演技実施の直後に各チームに交付する。各チームには競技会の終わりに、決定成績表の一部を授与する。成績は逐次競技中に公表し、決定成績は競技終了後に公表する。全記録の副本は、これを本協会の文庫に納める。",
        block:   []
      } as Section, {
        title:   "競技会場と演技面",
        content: "競技場は、約50m×30mの面積を競技エリアとし、最低12m以上の高さがなければならない。競技エリアには競技関係者以外の立ち入りを禁止する。演技面は内側13m×13mとする。その周りには２m以上の安全地帯を設ける。なお、演技代を設ける場合の安全地帯は３m以上とする。演技面を２面（男女）設置する場合は、その間の距離を４m以上とする。審判の位置は演技面より４m以上離れた場所に設置する。",
        block:   []
      } as Section, {
        title:   "器械器具の準備",
        content: "すべての器械器具は、組織委員会がこれを準備する。組織委員会は器械器具認定規則および男子新体操委員会の与える指示に従わなければならない。",
        block:   []
      } as Section]
    } as Article, {
      title: "競技会", section: [{
        title:   "大会要項",
        content: "競技会は、その年度の定める大会要項により実施する。",
        block:   []
      } as Section, {
        title:   "競技会の日程と試技順の抽選",
        content: "男子新体操委員会は、競技会の日程細案作成および公平な抽選による試技順の編成と審判団の編成を行う。",
        block:   []
      } as Section, {
        title:   "競技方法の種類",
        content:
          "競技会は、団体演技、個人演技の２部に分け、以下の競技方法のいずれかで行う" +
            "<ol>" +
              "<li>" +
                "<b>団体演技</b>" +
                "<ol>" +
                  "<li>" +
                    "<b>競技 I　（例　全日本選手権大会等）</b>" +
                    "<ol>" +
                      "<li>" +
                        "<b>競技種目</b>\n" +
                        "Ａ　予選競技（自由演技）　Ｂ　決勝競技（自由演技）\n" +
                      "</li>" +
                      "<li>" +
                        "<b>順位決定方法</b>\n" +
                        "決勝には得点上位８チームが出場できる。\n" +
                        "予選競技の１／２の得点と決勝競技の得点合計（30点満点）で順位を決定する。（第28条参照）\n" +
                      "</li>" +
                    "</ol>" +
                  "</li>" +
                  "<li>" +
                    "<b>競技 Ⅱ</b>" +
                    "<ol>" +
                      "<li>" +
                        "<b>競技種目と順序</b>\n" +
                        "Ａ　予選競技（規定演技）　Ｂ　決勝競技（自由演技）\n" +
                      "</li>" +
                      "<li>" +
                        "<b>順位決定方法</b>\n" +
                        "決勝には得点上位８チームが出場できる。\n" +
                        "予選競技の得点（実施10点）と決勝競技の得点（20点満点）の合計（30点満点）で順位を決定する。（第28条参照）\n" +
                        "規定・自由の種目別順位は、各種目の得点で決定する。\n" +
                      "</li>" +
                    "</ol>" +
                  "</li>" +
                  "<li>" +
                    "<b>競技 Ⅲ　（例　団体選手権、全日本ジュニア、インターハイ、全国高校選抜等）</b>" +
                    "<ol>" +
                      "<li>" +
                        "<b>競技種目と順序</b>\n" +
                        "Ａ　決勝競技（自由演技）\n" +
                      "</li>" +
                      "<li>" +
                        "<b>順位決定方法</b>\n" +
                        "決勝競技の得点（20点満点）で順位を決定する。（第28条参照）\n" +
                      "</li>" +
                    "</ol>" +
                  "</li>" +
                "</ol>" +
              "</li>" +
              "<li>" +
                "<b>個人競技</b> \n" +
                "<ol>" +
                  "<li>" +
                    "<b>競技 I　（例　全日本選手権大会　インカレ等）</b>" +
                    "<ol>" +
                      "<li>" +
                        "<b>競技種目と順序</b>\n" +
                        "Ａ　個人総合（自由演技）　Ｂ　種目別決勝（自由演技）" +
                        "a　スティック　b　リング　c　ロープ　d　クラブ\n" +
                      "</li>" +
                      "<li>" +
                        "<b>順位決定方法</b>\n" +
                        "個人総合は４種目の合計（80点満点）で順位を決定する。\n" +
                        "種目別決勝は各種濁の上位８名が出場でき、決勝得点（20点満点）で順位を決定する。" +
                      "</li>" +
                    "</ol>" +
                  "</li>" +
                  "<li>" +
                    "<b>競技 Ⅱ　（例　全日本ジュニア、全国高校選抜大会等）</b>" +
                    "<ol>" +
                      "<li>" +
                        "<b>競技種目と順序\n</b>" +
                        "Ａ　個人総合（自由演技）　Ｂ　種目別（自由演技）\n" +
                        "a　スティック　b　リング　c　ロープ　d　クラブ\n" +
                        "競技種目の順番は大会要項に定める。" +
                      "</li>" +
                      "<li>" +
                        "<b>順位決定方法</b>\n" +
                        "個人総合は４種目の合計（80点満点）で順位を決定する。\n" +
                        "種目別は、各種目の得点（20点満点）で順位を決定する。" +
                      "</li>" +
                    "</ol>" +
                  "</li>" +
                  "<li>" +
                    "<b>競技Ⅲ　（例　全日本ユース等）</b>" +
                    "<ol>" +
                      "<li>" +
                        "<b>競技種目と順序</b>\n" +
                        "Ａ　個人総合（自由演技）\n" +
                        "a　スティック　b　リング　c　ロープ　d　クラブ\n" +
                      "</li>" +
                      "<li>" +
                        "<b>順位決定方法</b>\n" +
                        "指定した２種目の得点上位者が、決勝競技に出場し、残りの２種目を実施する。\n" +
                        "各種目別（20点満点）の得点合計で順位を決定する。\n" +
                        "種目の指定と決勝競技の人数は大会要項に定める。" +
                      "</li>" +
                    "</ol>" +
                  "</li>" +
                "</ol>" +
              "</li>" +
              "<li>" +
                "<b>団体個人総合競技</b>" +
                "<ol>" +
                  "<li>" +
                    "<b>競技Ⅰ　（例　国民体育大会等）</b>" +
                    "<ol>" +
                      "<li>" +
                        "<b>競技種目と順序</b>\n" +
                        "Ａ　個人競技\n" +
                        "a　スティック　b　リング　c　ロープ　d　クラブ\n" +
                        "Ｂ　団体競技\n" +
                        "団体競技に出場する競技者のうち４名が、a〜bの種目を各一人ずつ実施する。\n" +
                      "</li>" +
                      "<li>" +
                        "<b>順位決定方法</b>\n" +
                        "個人４種目の得点合計の１／４（20点満点）と団体競技（20点満点）の得点合計で順位を決定する。" +
                      "</li>" +
                    "</ol>" +
                  "</li>" +
                "</ol>" +
              "</li>" +
            "</ol>",
        block:   []
      } as Section, {
        title:   "団体競技の申し込み",
        content: "団体競技は競技者を８名まで申し込むことができる。\n団体競技者は、監督会議において承認された競技者のうち６名が演技を行う。ただし、５名または４名の競技者でも演技を行うこともできる。",
        block:   []
      } as Section, {
        title:   "個人競技の申し込み",
        content:
          "個人競技は、当該当年度の競技会に定めた競技者を申し込むことができる。" +
          "<ol>" +
            "<li>個人競技は、競技Ⅰ・Ⅱ・Ⅲのいずれかを行う。</li>" +
            "<li>個人競技に出場した競技者は、所属団体の団体競技に出場することができる。</li>" +
            "<li>申し込み後の競技者の交代はできない。</li>" +
            "<li>個人競技の１所属に対する出場制限は原則８名までとする。</li>" +
          "</ol>",
        block:   []
      } as Section, {
        title:   "音響機器の使用",
        content:
          "伴奏音楽は音響機器を使用するものとする。" +
          "<ol>" +
            "<li>音響機器は、組織委員会で準備したもの、または自己で準備したものを使用することができる。</li>" +
            "<li>音楽媒体等には、所属名または競技者名を示していかなければならない。</li>" +
            "<li>規定演技の伴奏音楽は、協会制定のものを使用することができる。</li>" +
          "</ol>",
        block:   []
      } as Section, {
        title:   "音響機器の欠陥の処置",
        content: "審判長・競技部長が当然と認める音響機器に欠点があった場合は、団体競技でも個人競技でも減点なしの復興ができる。",
        block:   []
      } as Section, {
        title:   "順位決定方法",
        content:
          "すべての競技において、獲得した得点で順位を決定する。" +
          "<ol>" +
            "<li>得点の合計は、各競技の順位決定方法に従う。</li>" +
            "<li>" +
              "予選競技から決勝競技への出場資格を得たチーム・競技者は必ず出場しなければならない。決勝競技に出場しない場合は失格となり、本大会のあらゆる賞典を失う。\n" +
              "ただし不可抗力の場合、または正当と認められた場合は除く。" +
            "</li>" +
            "<li>個人競技で、種目別決勝の競技出場者が得点上位８名の場合は、同一所属からの出場者が３名を超えることはできない。</li>" +
            "<li>予選競技から決勝競技を行う際の欠員は、次位のチーム・競技者を持ってこれに代える。</li>" +
            "<li>予選競技から決勝競技を行う際の試技順は、１位〜４位、５位〜８位までの２グループで抽選して決定する。</li>" +
            "<li>" +
              "<b>同点順位の決定方法</b>\n" +
              "同点の順位は同順位とするが、決勝競技または上級大会への優先獲得権は次の手順で行う。" +
              "<ol>" +
                "<li>" +
                  "団体競技" +
                  "<ol>" +
                    "<li>" +
                      "すべての審判員の採点合計（主任審判および最高点・最低点と減点を含む）の高いチーム。" +
                      "1 において同点の場合、すべての構成審判員の採点合計が高いチーム。" +
                      "2 において同点の場合、主任審判員の採点合計の高いチーム。" +
                      "3 において同点の場合、抽選とする。" +
                    "</li>" +
                  "</ol>" +
                "</li>" +
                "<li>" +
                  "個人競技" + "           　　　　　個人総合は予選で演技したすべての種目、種目別競技者権は、その種目を対象として次の手順で行う。<br>\n" + "           　　　　　①　すべての審判員の採点合計（主任審判および最高点・最低点と減点を含む）の高い競技者。<br>\n" + "           　　　　　②　①において同点の場合、すべての構成審判員の採点合計が高い競技者。<br>\n" + "           　　　　　③　②において同点の場合、主任審判員の採点合計の高い競技者。<br>\n" + "           　　　　　④　③において同点の場合、抽選とする。<br>\n" + "           　　　（３）　国民体育大会および同ブロック予選<br>\n" + "           　　　　　①　団体競技の得点の（本来の得点）の高いチーム。<br>\n" + "           　　　　　②　①において同点の場合、団体競技および個人競技４種目のすべての審判員（主任審判および最高点・最低点）の採点合計の高いチーム。<br>\n" + "           　　　　　③　②において同点の場合、団体競技すべての審判員（主任審判および最高点・最低点）の採点合計の高いチーム。<br>\n" + "           　　　　　④　③において同点の場合、抽選とする。</li>",
        block:   []
      } as Section, {
        title:   "所属団体と監督者",
        content: "",
        block:   []
      } as Section, {
        title:   "演技中の不快不慮の事故",
        content: "",
        block:   []
      } as Section, {
        title:   "競技場への入場",
        content: "",
        block:   []
      } as Section]
    } as Article, {
      title: "表彰", section: [{
        title:   "表彰式の開催",
        content: "",
        block:   []
      } as Section, {
        title:   "選手権大会の表彰内容",
        content: "",
        block:   []
      } as Section]
    } as Article, {
      title:"競技者", section: [{
        title:   "会費の滞納",
        content: "",
        block:   []
      } as Section, {
        title:   "出場資格とアマチュア規定",
        content: "",
        block:   []
      } as Section, {
        title:   "年齢",
        content: "",
        block:   []
      } as Section, {
        title:   "競技者の義務",
        content: "",
        block:   []
      } as Section, {
        title:   "競技会の出場種目",
        content: "",
        block:   []
      } as Section, {
        title:   "競技者の服装",
        content: "",
        block:   []
      } as Section, {
        title:   "競技者の権利",
        content: "",
        block:   []
      } as Section, {
        title:   "競技者の規律",
        content: "",
        block:   []
      } as Section]
    } as Article, {
      title: "監督者・コーチ", section: [{
        title:   "監督者・コーチの責務と規律",
        content: "",
        block:   []
      } as Section, {
        title:   "第43条 規律違反",
        content: "",
        block:   []
      } as Section]
    } as Article, {
      title: "一般的な競技規則", section: [{
        title:   "新体操の演技",
        content: "",
        block:   []
      } as Section, {
        title:   "伴奏音楽",
        content: "",
        block:   []
      } as Section, {
        title:   "得点",
        content: "",
        block:   []
      } as Section, {
        title:   "演技時間",
        content: "",
        block:   []
      } as Section, {
        title:   "演技人数",
        content: "",
        block:   []
      } as Section]
    } as Article, {
      title: "手具", section: [{
        title:   "手具の規格",
        content: "",
        block:   []
      } as Section, {
        title:   "手具点検",
        content: "",
        block:   []
      } as Section, {
        title:   "競技規則に定めない問題",
        content: "",
        block:   []
      } as Section]
    } as Article]
  } as Chapter, {
    title: "採点規則", article: [{
      title: "総則", section: [{
        title:   "採点規則の適用",
        content: "",
        block:   []
      } as Section]
    } as Article, {
      title: "審判", section: [{
        title:   "競技と審判",
        content: "",
        block:   []
      } as Section, {
        title:   "審判員規定",
        content: "",
        block:   []
      } as Section, {
        title:   "審判研修会と審判会議",
        content: "",
        block:   []
      } as Section, {
        title:   "審判員宣誓",
        content: "",
        block:   []
      } as Section, {
        title:   "審判団の構成",
        content: "",
        block:   []
      } as Section, {
        title:   "上級審判員",
        content: "",
        block:   []
      } as Section, {
        title:   "審判長",
        content: "",
        block:   []
      } as Section, {
        title:   "主任審判員",
        content: "",
        block:   []
      } as Section, {
        title:   "構成（Ｄ・Ａ）審判",
        content: "",
        block:   []
      } as Section, {
        title:   "実施（Ｅ）審判",
        content: "",
        block:   []
      } as Section, {
        title:   "線審",
        content: "",
        block:   []
      } as Section, {
        title:   "計時審",
        content: "",
        block:   []
      } as Section, {
        title:   "補審",
        content: "",
        block:   []
      } as Section]
    } as Article, {
      title: "一般的な採点規則", section: [{
        title:   "採点方法と採点の開き",
        content: "",
        block:   []
      } as Section, {
        title:   "基準点",
        content: "",
        block:   []
      } as Section, {
        title:   "演技時間",
        content: "",
        block:   []
      } as Section, {
        title:   "演技開始までの時間",
        content: "",
        block:   []
      } as Section, {
        title:   "演技面への入退場",
        content: "",
        block:   []
      } as Section, {
        title:   "場外",
        content: "",
        block:   []
      } as Section, {
        title:   "試合着",
        content: "",
        block:   []
      } as Section, {
        title:   "伴奏音楽",
        content: "",
        block:   []
      } as Section, {
        title:   "手具",
        content: "",
        block:   []
      } as Section, {
        title:   "規律",
        content: "",
        block:   []
      } as Section]
    } as Article, {
      title: "団体競技", section: [{
        title:   "団体競技（自由演技）の採点",
        content: "",
        block:   [{
          title:   "団体（自由演技）の採点項目と配点",
          element: ""
        } as Block]
      } as Section, {
        title:   "構成（Ｄ・Ａ）" ,
        content: "",
        block:   [{
          title:   "演技人数不足",
          element: ""
        } as Block, {
          title:   "構成に求められるもの",
          element: ""
        } as Block, {
          title:   "難度の要求要素",
          element: ""
        } as Block, {
          title:   "徒手系の要求要素",
          element: ""
        } as Block, {
          title:   "転回系の種類",
          element: ""
        } as Block, {
          title:   "回転系の条件",
          element: ""
        } as Block, {
          title:   "転回系の要求要素",
          element: ""
        } as Block, {
          title:   "制限技",
          element: ""
        } as Block, {
          title:   "隊形の要求要素",
          element: ""
        } as Block, {
          title:   "演技の開始",
          element: ""
        } as Block, {
          title:   "演技の終了",
          element: ""
        } as Block, {
          title:   "技術的価値の採点",
          element: ""
        } as Block, {
          title:   "多様性の採点",
          element: ""
        } as Block, {
          title:   "音楽と動きの関係の採点",
          element: ""
        } as Block, {
          title:   "独創性の採点",
          element: ""
        } as Block, {
          title:   "構成の欠点",
          element: ""
        } as Block]
      } as Section, {
        title:   "実施（Ｅ）",
        content: "",
        block:   [{
          title:   "演技のできばえ",
          element: ""
        } as Block, {
          title:   "体の動きの技術の採点",
          element: ""
        } as Block, {
          title:   "全体的な調和の採点",
          element: ""
        } as Block, {
          title:   "禁止事項",
          element: ""
        } as Block, {
          title:   "実施の欠点",
          element: ""
        } as Block]
      } as Section]
    } as Article, {
      title: "個人競技", section: [{
        title:   "配点と採点項目",
        content: "",
        block: [{
          title:   "個人競技の採点項目と配点",
          element: ""
        } as Block]
      } as Section, {
        title:   "構成（Ｄ・Ａ）",
        content: "",
        block:   [{
          title:   "演技の構成",
          element: ""
        } as Block, {
          title:   "難度の要求要素",
          element: ""
        } as Block, {
          title:   "徒手系の要求要素",
          element: ""
        } as Block, {
          title:   "転回系の要求要素",
          element: ""
        } as Block, {
          title:   "手具操作の要求要素",
          element: ""
        } as Block, {
          title:   "手具の要素と難度",
          element: ""
        } as Block, {
          title:   "演技の開始",
          element: ""
        } as Block, {
          title:   "演技の終了",
          element: ""
        } as Block, {
          title:   "技術的価値の採点",
          element: ""
        } as Block, {
          title:   "多様性の採点",
          element: ""
        } as Block, {
          title:   "音楽と動きの関係の採点",
          element: ""
        } as Block, {
          title:   "ボーナス加点",
          element: ""
        } as Block, {
          title:   "構成の欠点",
          element: ""
        } as Block]
      } as Section, {
        title:   "実施（Ｅ）",
        content: "",
        block:   [{
          title: "演技のできばえ",
          element: ""
        } as Block, {
          title: "手具操作の技術の採点",
          element: ""
        } as Block, {
          title: "体の動きの技術の採点",
          element: ""
        } as Block, {
          title: "ボーナス加点",
          element: ""
        } as Block, {
          title: "実施の欠点",
          element: ""
        } as Block]
      } as Section]
    } as Article, {
      title: "難度", section: [{
        title:   "難度の要求要素",
        content: "",
        block:   [{
          title:   "徒手系難度",
          element: ""
        } as Block]
      } as Section, {
        title:   "転回系難度",
        content: "",
        block:   [{
          title:   "転回系難度",
          element: ""
        } as Block]
      } as Section, {
        title:   "団体競技における難度の組み合わせ",
        content: "",
        block:   [{
          title:   "交差技と組運動の難度",
          element: ""
        } as Block]
      } as Section, {
        title:    "個人競技における難度",
        content:  "",
        block:    [{
          title:   "転回系における手具操作と難度",
          element: ""
        } as Block, {
          title:   "投げ受けの難度",
          element: ""
        } as Block, {
          title:   "手具操作をともなった徒手系の難度",
          element: ""
        } as Block]
      } as Section]
    } as Article]
  } as Chapter, {
    title: "付録", article: [{
      title: "難度解図", section: [{
        title:   "徒手系難度",
        content: "1 徒手系難度\n2 転回系難度",
        block:   []
      } as Section, {
        title:   "特別規則",
        content: "1 ジュニア適用規則\n2 小学生適用規則\n3 高体連規則",
        block:   []
      } as Section, {
        title:   "徒手の演技",
        content: "",
        block:   []
      } as Section, {
        title:   "個人競技の演技",
        content: "",
        block:   []
      } as Section, {
        title:   "公認審判員規則",
        content: "",
        block:   []
      } as Section, {
        title:   "主任審判員減点表",
        content: "",
        block:   []
      } as Section, {
        title:   "審判メモ",
        content: "",
        block:   []
      } as Section, {
        title:   "得点票",
        content: "",
        block:   []
      } as Section, {
        title:   "採点票・減点票",
        content: "",
        block:   []
      } as Section]
    } as Article]
  } as Chapter]
} as RuleBook;