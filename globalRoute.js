// globalRoute.js

import eventRoutes from "./routes/event.route.js";
import eventTypesRoutes from "./routes/eventType.route.js";
import orderRoutes from "./routes/order.route.js";
import ticketRoutes from "./routes/ticket.route.js";
import ticketTypesRoutes from "./routes/ticketType.route.js";
import userRoutes from "./routes/user.route.js";

const registerRoutes = (app) => {
  app.use("/api/user", userRoutes);
  app.use("/api/event", eventRoutes);
  app.use("/api/ticket", ticketRoutes);
  app.use("/api/order", orderRoutes);
  app.use("/api/eventTypes", eventTypesRoutes);
  app.use("/api/ticketTypes", ticketTypesRoutes);
};

export default registerRoutes;
