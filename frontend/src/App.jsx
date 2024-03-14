import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./scss/custom.scss";
import "./scss/styles.scss";

import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

import Home from "./pages/hivePages/Home.jsx";
import CreateHive from "./pages/hivePages/CreateHive.jsx";
import EditHive from "./pages/hivePages/EditHive.jsx";
import DeleteHive from "./pages/hivePages/DeleteHive.jsx";

import Inspection from "./pages/inspectionPages/Inspection.jsx";
import CreateInspection from "./pages/inspectionPages/CreateInspection.jsx";
import EditInspection from "./pages/inspectionPages/EditInspection.jsx";
import DeleteInspection from "./pages/inspectionPages/DeleteInspection.jsx";

import Inventory from "./pages/inventoryPages/Inventory.jsx";
import CreateInventory from "./pages/inventoryPages/CreateInventory.jsx";
import EditInventory from "./pages/inventoryPages/EditInventory.jsx";
import DeleteInventory from "./pages/inventoryPages/DeleteInventory.jsx";

import Treatment from "./pages/treatmentPages/Treatment.jsx";
import CreateTreatment from "./pages/treatmentPages/CreateTreatment.jsx";
import EditTreatment from "./pages/treatmentPages/EditTreatment.jsx";
import DeleteTreatment from "./pages/treatmentPages/DeleteTreatment.jsx";

import Harvest from "./pages/harvestPages/Harvest.jsx";
import CreateHarvest from "./pages/harvestPages/CreateHarvest.jsx";
import EditHarvest from "./pages/harvestPages/EditHarvest.jsx";
import DeleteHarvest from "./pages/harvestPages/DeleteHarvest.jsx";

import Swarm from "./pages/swarmPages.jsx/Swarm.jsx";
import CreateSwarm from "./pages/swarmPages.jsx/CreateSwarm.jsx";
import EditSwarm from "./pages/swarmPages.jsx/EditSwarm.jsx";
import DeleteSwarm from "./pages/swarmPages.jsx/DeleteSwarm.jsx";

import Feed from "./pages/feedPages/Feed.jsx";
import CreateFeed from "./pages/feedPages/CreateFeed.jsx";
import EditFeed from "./pages/feedPages/EditFeed.jsx";
import DeleteFeed from "./pages/feedPages/DeleteFeed.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hives/create" element={<CreateHive />} />
      <Route path="/hives/delete/:id" element={<DeleteHive />} />
      <Route path="/hives/edit/:id" element={<EditHive />} />

      <Route path="/inspections" element={<Inspection />} />
      <Route path="/inspections/create" element={<CreateInspection />} />
      <Route path="/inspections/delete/:id" element={<DeleteInspection />} />
      <Route path="/inspections/edit/:id" element={<EditInspection />} />

      <Route path="/inventory" element={<Inventory />} />
      <Route path="/inventory/create" element={<CreateInventory />} />
      <Route path="/inventory/delete/:id" element={<DeleteInventory />} />
      <Route path="/inventory/edit/:id" element={<EditInventory />} />

      <Route path="/treatments" element={<Treatment />} />
      <Route path="/treatments/create" element={<CreateTreatment />} />
      <Route path="/treatments/delete/:id" element={<DeleteTreatment />} />
      <Route path="/treatments/edit/:id" element={<EditTreatment />} />

      <Route path="/harvest" element={<Harvest />} />
      <Route path="/harvest/create" element={<CreateHarvest />} />
      <Route path="/harvest/edit/:id" element={<EditHarvest />} />
      <Route path="/harvest/delete/:id" element={<DeleteHarvest />} />

      <Route path="/swarm" element={<Swarm />} />
      <Route path="/swarm/create" element={<CreateSwarm />} />
      <Route path="/swarm/edit/:id" element={<EditSwarm />} />
      <Route path="/swarm/delete/:id" element={<DeleteSwarm />} />

      <Route path="/feed" element={<Feed />} />
      <Route path="/feed/create" element={<CreateFeed />} />
      <Route path="/feed/edit/:id" element={<EditFeed />} />
      <Route path="/feed/delete/:id" element={<DeleteFeed />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
