import { useCallback, useEffect, useState, type FC } from "react";
import { type Event } from "@prisma/client";
import { CheckCircle } from "~/assets/icons";
import Button from "~/components/atoms/Button";
import { STEP } from "~/lib/consts";
import { fetchEvents } from "~/server/event";
import EventsTable from "../EventsTable";

type TestStepProps = {
  open: boolean;
  onExpand: (step: STEP) => void;
  surfaceTagId: string;
};

const TestStep: FC<TestStepProps> = ({ open, onExpand, surfaceTagId }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const getAllEvents = useCallback(async (tagId: string) => {
    const allTagEvents = await fetchEvents(tagId);
    setEvents(allTagEvents);
  }, []);

  useEffect(() => {
    if (surfaceTagId) {
      void getAllEvents(surfaceTagId);
    }
  }, [getAllEvents, surfaceTagId]);

  return (
    <div className="shadow-[0px_1.2px_3.99px_0px_rgba(0,0,0,0.07), 0px_4.02px_13.4px_0px_rgba(0,0,0,0.11)] gap-[23px] rounded-[8px] border-2 border-[#EBEDF3] bg-white p-6">
      <div className="flex flex-row items-center gap-4">
        <CheckCircle stroke="grey" />
        <div className="flex flex-col gap-1">
          <div className="font-pretendard text-[18px] font-medium leading-[21.48px] tracking-[0.1px]">
            Test Surface Tag Events
          </div>
          <div className="font-inter text-[16px] font-normal leading-[20px] tracking-[0.05em]">
            Test if the Surface Tag is properly emitting events.
          </div>
        </div>
        {!open && (
          <div className="ml-auto">
            <Button
              color="primary"
              isDisabled={surfaceTagId.length === 0}
              onClick={() => onExpand(STEP.Test)}
            >
              Test tag
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
              <EventsTable events={events} />
            </div>

            <div className="flex justify-between">
              <span></span>
              <div className="w-fit">
                <Button
                  color="primary"
                  onClick={() => {
                    void getAllEvents(surfaceTagId)
                  }}
                >
                  Test Tag
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestStep;
