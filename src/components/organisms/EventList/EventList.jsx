import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { EventCard } from '@components/molecules/EventCard';

const Title = styled.h2`
  text-align: center;
`;
const Wrapper = styled.div``;
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;

  li {
    margin: 0 1rem 2.5rem;
  }
`;

const Card = styled(EventCard)`
  height: 100%;
`;

export function EventList({ title, events }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {events?.length === 0 && <NoResults>No events found.</NoResults>}
      {events?.length && (
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
  title: PropTypes.string,
};

EventList.defaultProps = {
  events: [],
  title: 'Events',
};

export default EventList;
