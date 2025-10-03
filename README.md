# Tennis Ratings Website
- Implemented a modified Glicko-2 system for tennis with weekly rating periods, volatility updates, and surface-specific models partially reverted to global ratings to reduce variance/noise
- Built end-to-end pipeline to ingest historical match data, compute ratings & ratings deviation (RD), and generate live rankings
- Deployed production web app on Vercel using Next.js; exposed rankings via lightweight endpoints and cached results for fast page loads and retrieval
