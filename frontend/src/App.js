import './App.css';
import ScatterPlotWrapper from './components/ScatterPlotWrapper';

function App() {
  return (
    <>
      <header className="app-header">
        <h3>UMAP Clusters for PBMC 3K Dataset</h3>
      </header>
      <section>
        <ScatterPlotWrapper/>
      </section>
    </>
  );
}

export default App;
