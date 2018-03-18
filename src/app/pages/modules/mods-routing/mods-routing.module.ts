import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from '../../modules/modules.component';
import { AdminComponent } from '../../modules/admin/admin.component';
import { TeacherComponent } from '../../modules/teacher/teacher.component';
import { ParentComponent } from '../../modules/parent/parent.component';

export const modulesRoute:Routes=[

  {
        path:'modules',
        component:ModulesComponent,
        
      },
      {
        path:'admin',
        component:AdminComponent
      },
      {
        path:'teacher',
        component:TeacherComponent
        
      },
       {
        path:'parent',
        component:ParentComponent
        
      },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(modulesRoute)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ModsRoutingModule { }
