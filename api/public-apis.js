module.exports = async (req, res) => {
  try {
    const r = await fetch('https://api.publicapis.org/entries');
    const data = await r.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'fetch failed' });
  }
};
