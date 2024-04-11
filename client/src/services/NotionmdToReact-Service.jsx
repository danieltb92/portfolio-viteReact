import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // Librería react-markdown

const App = () => {
  const [markdownData, setMarkdownData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/pages-md');
      const data = await response.json();
      setMarkdownData(data);
    }

    fetchData();
  }, []);

  return (
      <Switch>
        {markdownData.map((item) => (
          <Route
            key={item.id}
            path={`/page/${item.slug}`}
            render={() => (
              <div key={item.id}>
                {/* <h2>{item.title}</h2> */}
                <ReactMarkdown>{item.content}</ReactMarkdown>
              </div>
            )}
          />
        ))}
      </Switch>
  );
};

export default App;