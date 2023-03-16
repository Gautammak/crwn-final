import React from "react";

import { Route } from "react-router-dom";
import CollectionPage from "../category/collection.component";

import CollectionsOverview from "../../components/collection-overwiew/collections-overview.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
