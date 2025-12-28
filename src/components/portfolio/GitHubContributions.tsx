import { useEffect, useState } from "react";

export const GitHubContributions = () => {
  const username = "mayurbadgujar03";
  const [isDark, setIsDark] = useState(false);
  const [contributions, setContributions] = useState<number | null>(null);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Fetch contribution count
    const fetchContributions = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        const data = await response.json();
        const total = data.total[Object.keys(data.total)[0]];
        setContributions(total);
      } catch (error) {
        console.error('Failed to fetch contributions:', error);
      }
    };
    
    fetchContributions();
  }, [username]);

  const chartUrl = isDark
    ? `https://ghchart.rshah.org/26a641/${username}`
    : `https://ghchart.rshah.org/39d353/${username}`; 

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-foreground">GitHub Contributions</h2>
      
      <div className="mt-6">
        <div className="overflow-x-auto rounded-lg border border-border p-4 bg-white dark:bg-black">
          <img
            src={chartUrl}
            alt={`${username}'s GitHub contribution chart`}
            className="w-full"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {contributions !== null 
              ? `${contributions} contributions in the last year`
              : 'Loading contributions...'}
          </span>
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-[10px] h-[10px] rounded-sm bg-[#ebedf0] dark:bg-[#161b22]"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#c6f6d5] dark:bg-[#0e4429]"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#68d391] dark:bg-[#006d32]"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#38a169] dark:bg-[#26a641]"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#22543d] dark:bg-[#39ff14]"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};
