import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Typography } from '@components/atoms/Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  max-width: 800px;
  text-align: center;
  justify-content: center;
  min-height: 200px;
  height: 100%;
`;

const Error = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'code message';
  grid-gap: 0rem;
  align-items: center;
  align-content: center;
  justify-content: stretch;
  margin: 0 auto;
  width: auto;
  max-width: 800px;
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  grid-area: message;
`;

const ErrorCode = styled.div`
  grid-area: code;
  padding: 1rem;

  & + ${ErrorMessage} {
    border-left: thin solid var(--gt-color-text-alt-title);
  }
`;

const MessageTypography = styled(Typography)`
  margin: 0;
`;

const CodeTypography = styled(Typography)`
  margin: 0;
  color: var(--gt-color-text-alt-title);
`;

export default function ErrorPage({ statusCode, message }) {
  return (
    <Wrapper>
      <Error>
        <ErrorCode>
          <CodeTypography variant="h1">{statusCode}</CodeTypography>
        </ErrorCode>
        <ErrorMessage>
          <MessageTypography variant="body2" component="h2">
            {message}
          </MessageTypography>
        </ErrorMessage>
      </Error>
    </Wrapper>
  );
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
  message: PropTypes.node,
};

ErrorPage.defaultProps = {
  statusCode: 404,
  message: 'Page Not Found',
};

export const getInitialProps = ({ res, err }) => {
  let statusCode = 404;
  let message = 'Page Not Found';

  if (err) {
    statusCode = err.statusCode;
    message = err.message;
  }

  if (res) {
    statusCode = res.statusCode;
    message = res.statusMessage;
  }

  return { statusCode, message };
};
