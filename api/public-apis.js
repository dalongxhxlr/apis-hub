module.exports = async (req, res) => {
  try {
    const r = await fetch('https://public-api-proxy.vercel.app/api/entries');
    const data = await r.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'fetch failed' });
  }
};
