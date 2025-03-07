export default async function handler(req, res) {
  const { prompt } = req.body;
  // Conectar a OpenAI API aquí
  res.status(200).json({ text: "Texto generado por IA" });
}
