# About Repo
This repo reads a umap matrix from the file `frontend/public/umap_coor.json` created by executing the`main.py` script. The frontend is a react app that uses [visx](https://airbnb.io/visx) to create a scatterplot for the x,y umap coordinates in this file.

# Getting started with the project
## Data
The data used in this project is based on a single-cell anndata file (pbmc3k_processed.h5ad) downloaded using [scanpy](https://scanpy.readthedocs.io/en/stable/) by executing the `main.py` script. The script extracts the umap matrix into a file in the frontend/public folder for visualization.
**Note:** As the download takes time (depending on network speed), for subsequent executions and avoiding redownloading, the script reads the local copy of the file, if it's downloaded once in the data folder.

## To execute the main.py script
Make sure you have python v3 and have installed scanpy using `pip install scanpy` 
To execute the `main.py` script make sure you are in the parent directory.
```
cd sc-umap-viz
python main.py

``` 

## To start the web server

```
cd frontend
npm start

``` 
**Note:** Make sure you have the latest version of node installed

The app can be accessed at http://localhost:3000
