import { useCallback, useMemo, useState, type FC } from "react";
import { CheckCircle, InformationCircle } from "~/assets/icons";
import Button from "~/components/atoms/Button";
import Toaster from "~/components/atoms/Toaster/page";
import { useNotification } from "~/lib/hooks/useNotification";
import { generateRandomSurfaceTagId } from "~/lib/utils/helper";
import { isUserRegistered } from "~/server/users";
import ErrorInstructionsList from "./components/ErrorInstructionsList";
import { STEP } from "~/lib/consts";

type InstallStepProps = {
  onConnectionPassed: (tagId: string) => void;
  nextStep: () => void;
  open: boolean;
  onExpand: (step: STEP) => void;
};

const InstallStep: FC<InstallStepProps> = ({ onConnectionPassed, nextStep, open, onExpand }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [connestionPassed, setConnestionPassed] = useState<boolean | null>(
    null,
  );

  const { notification, setNotificationState } = useNotification();

  // Generate the SURFACE_TAG_ID when the page loads
  const surfaceTagId: string = useMemo(() => generateRandomSurfaceTagId(), []);

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

  const handleTestConnection = useCallback(async () => {

    if(connestionPassed) {
      // if connection is passed then we can move to next step
      nextStep();
      return;
    }

    // set toast message
    setNotificationState(
      "#F1F4FD",
      true,
      <InformationCircle className="h-5 w-5" fill="#4159CF" />,
      "Checking for Tag...",
    );

    const result = await isUserRegistered(surfaceTagId);
    
    if (result.registered) {
      // connection passed
      setNotificationState(
        "#EFFAF6",
        true,
        <InformationCircle className="h-5 w-5" fill="#38C793" />,
        "Connected successfully!",
      );
      setConnestionPassed(true);
      onConnectionPassed(surfaceTagId);
    } else {
      // connection failed
      setNotificationState(
        "#FDEDF0",
        true,
        <InformationCircle className="h-5 w-5" fill="#DF1C41" />,
        "We couldn’t detect the Surface Tag on your website. Please ensure the snippet is added correctly. ",
        <ErrorInstructionsList />,
      );
      setConnestionPassed(false);
    }
    console.log(result);
  }, [connestionPassed, nextStep, onConnectionPassed, setNotificationState, surfaceTagId]);

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
        {!open && (
          <div className="ml-auto">
            <Button color="primary" onClick={() => onExpand(STEP.Install)}>
              Install tag
            </Button>
          </div>
        )}
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${open ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
      >
        {open && (
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
            {notification && <Toaster {...notification} />}

            <div className="flex justify-between">
              <span></span>
              <div className="w-fit">
                <Button color="primary" onClick={handleTestConnection}>
                  {connestionPassed === true
                    ? "Next step"
                    : connestionPassed === false
                      ? "Try again"
                      : "Test Connection"}
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
