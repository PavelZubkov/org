namespace $.$$ {

	export class $org_goal_project_page extends $.$org_goal_project_page {

		task_add() {
			const obj = this.project().task_create()
			this.$.$mol_state_arg.value( 'task' , obj.id() )
		}

		name( next?: string ) {
			return this.project().title( next ) || this.text().project_new
		}

	}

}
