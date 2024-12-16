import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = {
    frontend:[
      {name:'Typescrpt',img:'assets/images/ts.png'},
      {name:'Javascript',img:'assets/images/js.png'},
      {name:'Angular',img:'assets/images/ng.png'},
      {name:'React',img:'assets/images/react.png'},
      {name:'Vue',img:'assets/images/vue.png'},
      {name:'HTML',img:'assets/images/html.jpg'},
      {name:'CSS',img:'assets/images/scss.png'},
      {name:'Tailwind',img:'assets/images/tl.png'},
      {name:'Pinia',img:'assets/images/pinia.png'},
      {name:'Redux',img:'assets/images/redux.png'},
      {name:'MUI',img:'assets/images/mui.png'},
    ],
    backend:[
      { name: 'Node', img: 'assets/images/node.png' },
      { name: 'PHP', img: 'assets/images/php.png' },
      { name: 'Python', img: 'assets/images/py.png' },
      { name: 'Laravel', img: 'assets/images/laravel.png' },
      { name: 'Sequelize', img: 'assets/images/sequelize.png' },
      { name: 'Socket.io', img: 'assets/images/socket.png' },
      { name: 'Prisma', img: 'assets/images/prisma.png' },
    ],
    db:[
      { name: 'MySQL', img: 'assets/images/mysql.png' },
      { name: 'MongoDB', img: 'assets/images/mongo.png' },
      { name: 'PostgreSQL', img: 'assets/images/postgres.png' },
    ],
    design:[
      {name:'Figma',img:'assets/images/figma.png'},
      {name:'Photoshop',img:'assets/images/photoshop.png'},
      {name:'CorelDraw',img:'assets/images/coreldraw.png'},
    ],
    others:[
      {name:'Git',img:'assets/images/git.png'},
      {name:'Docker',img:'assets/images/docker.png'},
      {name:'Linux',img:'assets/images/linux.png'},
      {name:'Postman',img:'assets/images/postman.png'},
    ]
  }

  private langService: LanguageService = inject(LanguageService);

  translate(key: string): string {
      return this.langService.translate(key);
  }

}
