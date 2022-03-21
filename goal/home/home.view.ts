namespace $.$$ {

	export class $org_goal_home extends $.$org_goal_home {

		project_create() {
			const obj = this.domain().project().create()
			this.$.$mol_state_arg.value( 'project' , obj.id() )
		}

		rows() {
			const projects = this.domain().project().list( this.domain().person_current() )
			return projects.map( obj => this.Link( obj.id() ) )
		}

		project_id( id: string ) {
			return id
		}

		project_title( id: string ) {
			return this.domain().project().item( id ).title()
		}

	}

}
