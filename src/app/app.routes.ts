import { Routes } from '@angular/router';
import { ClientLayout } from './layout/client-layout/client-layout';
import { CategoriasList } from './pages/categorias-list/categorias-list';
import { FamiliasList } from './pages/familias-list/familias-list';
import { LaboratoriosList } from './pages/laboratorios-list/laboratorios-list';
import { ListProduct } from './pages/list-product/list-product';
import { SaveProduct } from './pages/save-product/save-product';

export const routes: Routes = [
    {
        path: '', component: ClientLayout, children: [ // esto => http://localhost:4200/paciente
            { path: 'categorias', component: CategoriasList }, // esto => http://localhost:4200/paciente/categorias
            { path: 'familias', component: FamiliasList }, // esto => http://localhost:4200/paciente/familias
            { path: 'laboratorios', component: LaboratoriosList }, // esto => http://localhost:4200/paciente/laboratorios
            { path: '', component: ListProduct }, // esto => http://localhost:4200/paciente,
            { path: 'create', component: SaveProduct }, // esto => http://localhost:4200/paciente/save
            { path: 'update/:id', component: SaveProduct }, // esto => http://localhost:4200/paciente/save
        ]
    }
];
