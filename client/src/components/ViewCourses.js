import {apiStates, useApi} from './useApi.jsx'

const ViewCourses = () => {
  const { state, error, data } = useApi('http://localhost:3001/api/courses');

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || 'General error'}</p>;
    case apiStates.SUCCESS:
      return (
        <>
          <p>Data:</p>
          <ul>
            {data.map((element) => (
              <li>{element.course}</li>
            ))}
          </ul>
        </>
      );
    default:
      return <p>loading..</p>;
  }
};

export default ViewCourses;
