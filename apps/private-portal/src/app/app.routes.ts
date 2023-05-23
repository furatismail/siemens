import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "films",
        loadChildren: () => import('@siemens/frontend/private-portal/films/feature-films')
        .then(routes => routes.)
    }
];
