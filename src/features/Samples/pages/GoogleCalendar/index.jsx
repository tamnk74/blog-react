import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ApiCalendar from 'react-google-calendar-api';

const GoogleCalendar = () => {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    ApiCalendar.onLoad(() => {
      console.log(ApiCalendar);
      if (ApiCalendar.sign) {
        setIsLogin(ApiCalendar.sign);
        loadEvents();
      }
    });
  }, []);
  function loadEvents() {
    ApiCalendar.listUpcomingEvents(10).then(({ result }) => {
      console.log(result.items);
      const events = result.items.map((event) => ({
        title: event.summary,
        date: event.start.dateTime,
        start: event.start.dateTime,
        end: event.end.dateTime,
      }));
      setUser({
        name: result.summary,
        email: result.summary,
      });
      setEvents(events);
    });
  }
  function handleSignIn() {
    if (!ApiCalendar.sign) {
      ApiCalendar.handleAuthClick();
      ApiCalendar.listenSign((status) => {
        console.log(
          ApiCalendar.gapi.auth2
            .getAuthInstance()
            .currentUser.get()
            .getAuthResponse(),
        );
        loadEvents();
        setIsLogin(status);
      });
    } else {
      setIsLogin(ApiCalendar.sign);
      loadEvents();
    }
  }

  function handleSignOut() {
    setIsLogin(false);
    setEvents([]);
    ApiCalendar.handleSignoutClick();
  }

  function handleEventClick(clickInfo) {
    console.log(clickInfo);
    console.log(clickInfo.event.title);
  }

  function handleDateSelect(selectInfo) {
    console.log(selectInfo);
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: Math.random().toString(36).substring(7),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEvents(clickInfo) {
    console.log(clickInfo);
  }

  return (
    <>
      {isLogin ? (
        <div className="d-flex justify-content-between mb-1">
          <div className="p-0 alert alert-success align-items-stretch">
            {user.name} - {user.email}
          </div>
          <div className="p-0">
            <button
              className="btn btn-secondary"
              onClick={() => handleSignOut()}
            >
              Sign out
            </button>
          </div>
        </div>
      ) : (
        <button className="btn btn-success" onClick={() => handleSignIn()}>
          <i
            className="fa fa-calendar"
            style={{ color: 'white', marginRight: '10px' }}
          ></i>
          Sign in with google
        </button>
      )}

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        editable={true}
        selectable={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventsSet={handleEvents}
        /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
      />
    </>
  );
};

export { GoogleCalendar };
