import { Controller  } from '../decorators/controller';

@Controller({
    name: 'home'
})
export class Home {
	
	info = "Willkommen bei dieser Demo-Anwendung!";
	
}