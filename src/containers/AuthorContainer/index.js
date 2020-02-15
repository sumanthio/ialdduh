import React from "react";
export const AuthorContainer = () => {
  const [authorData, setAuthorData] = useState([]);
  useEffect(() => {
    getAuthorDetails().then(authorData => setAuthorData(authorData));
  }, []);

  return (
    <React.Fragment>
      <h2>Author View</h2>
      <h3>{authorData.name}</h3>
      <h3>{authorData.phone}</h3>
      <h3>{authorData.email}</h3>
      <p>{autherData.address}</p>
    </React.Fragment>
  );
};
