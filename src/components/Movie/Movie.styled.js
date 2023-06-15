import styled from "styled-components";

const StyledMovie = styled.div`
/* Small Screen */

    margin-bottom: 1rem;
  
  
  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #4CC9F0;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .movie__date {
    color: #64748b;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    flex-basis: 50%;
    
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
      flex-basis: 25%;
      padding: 1rem;
  }
`;

export default StyledMovie;