<?php
mb_language("uni");
mb_internal_encoding("UTF-8"); //内部文字コードを変更
mb_http_input("auto");
mb_http_output("UTF-8");

//
//  mailsend.php
//    2017/1/30 ,
//     test=ykpythemindもpostすること。
//

//フォームの値を取得
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	foreach($_POST as $k => $v){
		//「magic_quotes_gpc=On」の時はエスケープ解除
		if (get_magic_quotes_gpc()) {
			$v = stripslashes($v);
		}
		$v = htmlspecialchars($v);
		$$k = $v;
	}
} else {
	exit();
}

if($test != "ykpythemind"){
  exit(”　”);
}


// IPアドレス・hostの取得
$ip = getenv("REMOTE_ADDR");
$host = getenv("REMOTE_HOST");
if ($host == null || $host == $ip)
$host = gethostbyaddr($ip);

//送信先メールアドレス
$to = "yukibukiyou@gmail.com,nkwors22@gmail.com";

// メール本文を組み立てます。
$naiyou = "$message

Name: $name
Mail: $mail
IP: $ip
HOST: $host";

if($message == "") {
		$h1 = "エラー";
		$msg = "内容が書かれていません。ブラウザの戻るボタンで戻り、内容をお書きください。";
	} else {
	if (mb_send_mail($to, "[メッセージ] Webサイトのフォームから [猫]", $naiyou)) {
    //成功
    $h1 = "メッセージを送信しました";
		$msg = "メッセージを頂き、誠にありがとうございました。<br /><br /><div style=\"text-align:center;\" align=\"center\"><a href=\"/\">トップページに戻る</a></div>";

	}
}
?>
