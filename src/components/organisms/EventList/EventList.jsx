import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import { EventCard } from '@components/molecules/EventCard';

const Title = styled.h2`
  text-align: center;
  color: var(--gt-color-navy);
  margin-top: 0;
`;

const Wrapper = styled.div`
  & + & {
    margin-top: 4rem;
  }
`;

const NoResults = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  li {
    margin: 0.5rem 0;
  }
`;

const Card = styled(EventCard)`
  height: 100%;
`;

const TitleLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--gt-color-blue);
    text-decoration: underline;
`;

export function EventList({ title, events, href }) {
  return (
    <Wrapper>
      {title && !href && <Title>{title}</Title>}
      {title && href && (
        <Title>
          <Link href={href} passHref>
            <TitleLink href={href}>{title}</TitleLink>
          </Link>
        </Title>
      )}
      {events?.length === 0 && <NoResults>No events found.</NoResults>}
      {!!events?.length && (
        <List>
          {events.map(
            ({ title: evtTitle, startDate, description, image, location, endDate, slug }) => (
              <li key={slug}>
                <Card
                  title={evtTitle}
                  startDate={startDate}
                  endDate={endDate}
                  description={description}
                  image={image}
                  location={location}
                  slug={slug}
                />
              </li>
            ),
          )}
        </List>
      )}
    </Wrapper>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape(EventCard.propTypes)),
  href: PropTypes.string,
  title: PropTypes.string,
};

EventList.defaultProps = {
  events: [],
  href: '',
  title: '',
};

export default EventList;
