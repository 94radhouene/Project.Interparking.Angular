import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FidelityComponent } from './fidelity.component';

const routes: Routes = [
    {
        path: '',
        component: FidelityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FidelityRoutingModule {}
