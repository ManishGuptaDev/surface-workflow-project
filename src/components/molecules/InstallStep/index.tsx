import { useCallback, useMemo, useState, type FC } from "react";
import { CheckCircle } from "~/assets/icons";
import Button from "~/components/atoms/Button";
import { generateRandomSurfaceTagId } from "~/lib/utils/helper";

const InstallStep: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Generate the SURFACE_TAG_ID when the page loads
  const surfaceTagId: string = useMemo(() => generateRandomSurfaceTagId(), [])  

  const sampleScript = `
<script>
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'surface.start': new Date().getTime(),
      event: 'surface.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'surface' ? '&l=' + l : '';
    j.async = true;
    j.src = 'http://localhost:3000/surface_analytics.js?id=' + i + dl;
    j.setAttribute('data-tag-id', i);
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'surface', '${surfaceTagId}');
</script>
  `;

  const handleCopyScript = async () => {
    try {
      await navigator.clipboard.writeText(sampleScript);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy script:", error);
    }
  };

  const handleTestConnection = useCallback(() => {
    console.log();
  }, []);

  return (
    <div className="shadow-[0px_1.2px_3.99px_0px_rgba(0,0,0,0.07), 0px_4.02px_13.4px_0px_rgba(0,0,0,0.11)] gap-[23px] rounded-[8px] border-2 border-[#EBEDF3] bg-white p-6">
      <div className="flex flex-row items-center gap-4">
        <CheckCircle stroke="grey" />
        <div className="flex flex-col gap-1">
          <div className="font-pretendard text-[18px] font-medium leading-[21.48px] tracking-[0.1px]">
            Install Surface Tag on your site
          </div>
          <div className="font-inter text-[16px] font-normal leading-[20px] tracking-[0.05em]">
            Enable tracking and analytics.
          </div>
        </div>
        {!isExpanded && (
          <div className="ml-auto">
            <Button color="primary" onClick={() => setIsExpanded(true)}>
              Install tag
            </Button>
          </div>
        )}
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        {isExpanded && (
          <div className="mt-6 flex flex-col gap-6">
            <div className="relative rounded-xl border-2 border-[#E2E4E9] bg-[#F9F9F9] shadow-[0px_2px_4px_0px_rgba(27,28,29,0.04)]">
              <pre className="p-4">
                <code>{sampleScript}</code>
              </pre>
              <div className="absolute right-4 top-4">
                <Button color="primary" onClick={handleCopyScript}>
                  {isCopied ? "Copied!" : "Copy Snippet"}
                </Button>
              </div>
            </div>
            <div className="flex justify-between">
              <span></span>
              <div className="w-fit">
                <Button color="primary" onClick={handleTestConnection}>
                  Test connection
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallStep;