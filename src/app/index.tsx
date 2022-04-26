import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
const LayoutPage = React.lazy(() => import("./layout"));
const LoginPage = React.lazy(() => import("./views/Login"));
const CustomPlan = React.lazy(() => import("./views/CustomPlan"));
const NotFoundPage = React.lazy(() => import("./views/NotFound"));

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LayoutPage />}>
				<Route index element={<LoginPage />} />
				<Route path="plan" element={<CustomPlan />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default App;
