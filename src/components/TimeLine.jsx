import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from "react-i18next";

function TimeLine() {
  const [t] = useTranslation('common');

  return (
    <section>
      <h2 className="title" id="time-line" >{t('main.h2')}</h2>
      <p className="title" id="time-line" >{t('main.p')}</p>
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement
          dateClassName= "time-line-date-top"
          className="vertical-timeline-element--education"
          date="2004 - 2006"
          contentStyle={{ background: 'rgb(255,255,255, 0.5)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255, 0.5)' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: 'rgb(0, 0, 0)' }}
        >
          <h3
            className="vertical-timeline-element-title"
          >
            {t('main.studies.first.description')}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
          >
            {t('main.studies.first.where')}
          </h4>
          <p>
            {t('main.studies.first.activities')}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008"
          dateClassName= "time-line-date-top"
          contentStyle={{ background: 'rgb(255,255,255, 0.5)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255, 0.5)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(0, 0, 0)' }}
        >
          <h3
            className="vertical-timeline-element-title"
          >
            {t('main.jobs.first.description')}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
          >
            {t('main.jobs.first.where')}
          </h4>
          <p>
            {t('main.jobs.first.activities')}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2016"
          dateClassName= "time-line-date-top"
          contentStyle={{ background: 'rgb(255,255,255, 0.5)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255, 0.5)' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: 'rgb(0, 0, 0)' }}
        >
          <h3
            className="vertical-timeline-element-title"
          >
            {t('main.studies.second.description')}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
          >
            {t('main.studies.second.where')}
          </h4>
          <p>
            {t('main.studies.second.activities')}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName= "time-line-date-top"
          date="2016"
          contentStyle={{ background: 'rgb(255,255,255, 0.5)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255, 0.5)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(0, 0, 0)' }}
        >
          <h3
            className="vertical-timeline-element-title"
          >
            {t('main.jobs.second.description')}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
          >
            {t('main.jobs.second.where')}
          </h4>
          <p>
            {t('main.jobs.second.activities')}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName= "time-line-date-top"
          date="2017"
          contentStyle={{ background: 'rgb(255,255,255, 0.5)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255, 0.5)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(0, 0, 0)' }}
        >
          <h3
            className="vertical-timeline-element-title"
          >
            {t('main.jobs.third.description')}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
          >
            {t('main.jobs.third.where')}
          </h4>
          <p>
            {t('main.jobs.third.activities')}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName= "time-line-date-top"
          date={t('main.studies.third.date')}
          contentStyle={{ background: 'rgb(255,255,255, 0.5)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255, 0.5)' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: 'rgb(0, 0, 0)' }}
        >
          <h3
            className="vertical-timeline-element-title"
          >
            {t('main.studies.third.description')}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
          >
            {t('main.studies.third.where')}
          </h4>
          <p>
            {t('main.studies.third.activities')}
          </p>
          <br/>
          <a
            href="https://www.betrybe.com/"
            rel="noreferrer"
            target="_blank"
          >
            {t('main.studies.third.meet')}
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName= "time-line-date-top"
          date={t('main.studies.fourth.date')}
          contentStyle={{ background: 'rgb(255,255,255, 0.5)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255, 0.5)' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: 'rgb(0, 0, 0)' }}
        >
          <h3
            className="vertical-timeline-element-title"
          >
            {t('main.studies.fourth.description')}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
          >
            {t('main.studies.fourth.where')}
          </h4>
          <p>
            {t('main.studies.fourth.activities')}
          </p>
          <a
            href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/48938361"
            rel="noreferrer"
            target="_blank"
          >
            {t('main.studies.fourth.certificate')}
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName= "time-line-date-bottom"
          date={t('main.studies.fifth.date')}
          contentStyle={{ background: 'rgb(255,255,255, 0.5)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255, 0.5)' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: 'rgb(0, 0, 0)' }}
        >
          <h3
            className="vertical-timeline-element-title"
          >
            {t('main.studies.fifth.description')}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
          >
            {t('main.studies.fifth.where')}
          </h4>
          <p>
            {t('main.studies.fifth.activities')}
          </p>
          {/* <a
            href="#"
            rel="noreferrer"
            target="_blank"
          >
            {t('main.studies.fifth.certificate')}
          </a> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          dateClassName= "time-line-date-bottom"
          date="2022 - ?"
          contentStyle={{ background: 'rgb(255,255,255, 0.5)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255, 0.5)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(0, 0, 0)' }}
        >
          <h3
            className="vertical-timeline-element-title"
          >
            {t('main.jobs.next.description')}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
          >
            {t('main.jobs.next.where')}
          </h4>
          <p>
          {t('main.jobs.next.activities')}
          </p>
          <a href="mailto:rafa.qfg@gmail.com">{t('main.jobs.next.hire.me')}</a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default TimeLine;
