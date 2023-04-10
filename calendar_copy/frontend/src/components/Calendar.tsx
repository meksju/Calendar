import React, { useEffect, useContext } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import UpdateEventDialog from './UpdateEventDialog';
import { EventContext } from '../context';
import { Box, Stack, Typography} from '@mui/material';
import AddEventDialog from './AddEventDialog';

const EventCalendar: React.FC = () => {
  const { events, addEventModalOpen, fetchEvents, eventModalOpen, openModalEvent, openAddModalEvent } = useContext(EventContext) as EventContextType;
  useEffect(() => {
      fetchEvents()
    }, [])

  const renderEventContent = (eventInfo: any) => {
    return (
      <Box component="span" textAlign='center' paddingX={1} paddingY={1} sx={{backgroundColor:eventInfo.backgroundColor, width:"100%", height:'100%', borderRadius: '16px'}}>
        <Typography color="white" variant="subtitle2">{eventInfo.timeText}</Typography>
        <Typography color="white" variant="subtitle2" sx={{fontStyle: 'italic'}}>{eventInfo.event.title}</Typography>
      </Box>
    )
  }
 
  const handleDateSelect = () => {
    openAddModalEvent();
  }

  const handleEventChange = (eventClickInfo: any) => {
    openModalEvent(eventClickInfo);
  }

  return (     
    <Stack direction="column" maxWidth="900px" spacing={3} marginX="auto" marginY={5}>
      {addEventModalOpen ? <AddEventDialog /> : null}
      {eventModalOpen ? <UpdateEventDialog/> : null }
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        displayEventEnd={true}
        selectMirror={true}
        initialView='dayGridMonth'
        weekends={true}
        firstDay={1}
        timeZone='UTC'
        events={events}
        selectable={true}
        editable={true}
        select={handleDateSelect}
        eventContent={renderEventContent}
        eventClick={handleEventChange}
        defaultAllDay={false}
      />
    </Stack>
  )
}

export default EventCalendar;