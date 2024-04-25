import os
import anndata
import scanpy
import json
import logging

def load_pbmc3k_processed(pbmc_file):
    """ 
        This function downloads the pbmc3k_processed, if it's already not downloaded, otherwise loads the local copy
        
        Parameters:
        - pbmc_file (str): The file path to the downloaded pbmc3k_processed AnnData file.

        Returns:
        - ann_data: the pbmc3k_processed anndata object

    """
    ann_data = None
    if os.path.exists(pbmc_file):
        try:
            ann_data = anndata.read_h5ad(pbmc_file)
        except Exception as e:
            logging.error("Error reading local AnnData file: %s", e)

    else:
        try:
            ann_data = scanpy.datasets.pbmc3k_processed()
        except Exception as e:
            logging.error("Exception in reading pbmc3k_processed: %s", e)
    return ann_data


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    pbmc_file = 'data/pbmc3k_processed.h5ad' # can be passed as cmd args
    # Load or download the pbmc3k_processed AnnData object
    ann_data = load_pbmc3k_processed(pbmc_file)
    if ann_data is not None:
        logging.info("Ann-data file read successfully")
        # Format the umap-coordinates to a list of dictionaries (for visualization)
        umap_coor_matrix = ann_data.obsm["X_umap"]
        umap_coor_dict = [{"x": row[0], "y": row[1]} for row in umap_coor_matrix]

        with open("./frontend/public/data/umap_coor.json", "w") as json_file:
            json.dump(umap_coor_dict, json_file)


        
