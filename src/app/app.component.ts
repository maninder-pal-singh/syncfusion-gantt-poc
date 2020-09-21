import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { Gantt, ToolbarItem, EditSettingsModel, ColumnModel, LabelSettings } from '@syncfusion/ej2-gantt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent   implements OnInit {

  public data:object[];
  public taskSettings: object;
  public timelineSettings: object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItem[];
  public columns: ColumnModel[];
  public resources: object[];
  public labelSettings: object;//LabelSettings;
  public resourceFields:object;
  public projectStartDate: Date;
  public projectEndDate:Date;
  public splitterSettings:object;

  @ViewChild('gantt', {static: true})
    public ganttObj: GanttComponent;

  ngOnInit(): void {
    this.data = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('05/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 2, Progress: 10 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/11/2019'), Duration: 3, Progress: 20  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor:"2FS", Progress: 0 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/21/2019'),
            EndDate: new Date('04/30/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/21/2019'), Duration: 3, Progress: 0 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/25/2019'), Duration: 2, Predecessor:"6FS", Progress: 0 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/15/2019'), Duration: 3, Progress: 70 }
            ]
        },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.timelineSettings = {
      topTier: {
        format: 'MMM dd, yyyy',
        unit: 'Week',
      },
      bottomTier: {
          unit: 'Day',
      },
    };

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true,
      mode:"Dialog",
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search'];

    this.columns =  [
      { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100', visible:false},
      { field: 'TaskName', headerText: 'Task Name', width: '250' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' , visible:false },
      { field: 'Duration', headerText: 'Duration', width: '150', visible:false },
      { field: 'Progress', headerText: 'Progress', width: '150', visible:false },
    ];

    this.labelSettings = {
      taskLabel: 'TaskName'
    };

    this.projectStartDate = new Date('03/31/2019 01:00:00 AM');
    this.projectEndDate = new Date('05/05/2019');

    this.splitterSettings = {
      columnIndex:'2'
    }; // not really necessary here because we are showing only one column as of now
  }

  title = 'syncfusion-gantt-poc';

  onClick() {
    let a = (this.data[0]);

    a["TaskName"] = "ChnageDetetction";
  }

  update(): void {
    let data: object = {
      TaskID: 3,
      TaskName: 'Updated by index value',
      StartDate: new Date('04/03/2019'),
      Duration: 4,
      Progress: 50,
      };
      this.ganttObj.updateRecordByID(data);
  }
}
