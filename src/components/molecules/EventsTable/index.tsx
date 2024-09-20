import React, { type FC } from "react";
import { type Event } from "@prisma/client";

type EventsTableProps = {
  events: Event[];
};

const EventsTable: FC<EventsTableProps> = ({ events }) => {
  return (
    <div className="rounded-lg bg-white shadow-md">
      <div className="grid grid-cols-4 gap-4 border-b px-6 py-4 font-bold">
        <div>Event</div>
        <div>Visitor</div>
        <div>Metadata</div>
        <div>Created At</div>
      </div>
      {events.map((event) => (
        <div
          key={event.id}
          className="grid grid-cols-4 gap-4 border-b px-6 py-4"
        >
          <div className="truncate">{event.name}</div>
          <div className="truncate">{event.visitorId || "-"}</div>
          <div className="truncate">
            {event.metadata && Object.keys(event.metadata).length > 0
              ? JSON.stringify(event.metadata)
              : "-"}
          </div>
          <div className="truncate">{new Date(event.createdAt).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export default EventsTable;
