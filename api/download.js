export default async function handler(req, res) {
  const BOT_TOKEN = "7635377723:AAHSkcwun__eevjRw4R9619Xxq0zgAlFpZ8";   // вставь сюда токен
  const CHAT_ID = "-4882509132";   // вставь сюда chat_id

  const message = "📲 Кто-то скачал TowerRush.apk!";

  // Отправка в Telegram
  await fetch(`https://api.telegram.org/bot7635377723:AAHSkcwun__eevjRw4R9619Xxq0zgAlFpZ8/sendMessage?chat_id=-4882509132&text=${encodeURIComponent(message)}`);

  // Редирект на APK
  res.writeHead(302, { Location: "/TowerRush.apk" });
  res.end();
}
