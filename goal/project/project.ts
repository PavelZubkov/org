namespace $.$$ {

	export class $org_goal_project_service extends $mol_object2 {

		domain(): $org_goal_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_goal_project_service' )
		}

		@ $mol_mem_key
		list( person: $org_goal_person , next?: $org_goal_project[] ) {
			const id_list = this.state().sub( person.id() ).list( next && next.map( obj => obj.id() ) )
			return id_list.map( id => this.item( String(id) ) )
		}

		@ $mol_mem_key
		item( id: string ) {
			const obj = new $org_goal_project
			obj.id = $mol_const( id )
			obj.domain = this.domain
			return obj
		}

		@ $mol_action
		create() {
			const person = this.domain().person_current()
			const obj = this.item( $mol_guid() )
			obj.person_list( [ this.domain().person_current() ] )
			this.list( person , [ ... this.list(person) , obj ] )
			return obj
		}

	}

	export class $org_goal_project extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $org_goal_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_goal_project' ).doc( this.id() )
		}

		title( next?: string ) {
			return this.state().sub( 'title' ).text( next )
		}

		description( next?: string ) {
			return this.state().sub( 'description' ).text( next )
		}

		task_list( next?: $org_goal_task[] ) {
			const id_list = this.state().sub( 'task_list' ).list( next && next.map( obj => obj.id() ) )
			return id_list.map( id => this.domain().task( String(id) ) )
		}

		status_list( next?: string[] ) {
			const list = this.state().sub( 'status_list' ).list( next )
			return list.map( item => String(item) )
		}

		person_list( next?: $org_goal_person[] ) {
			const id_list = this.state().sub( 'person_list' ).list( next && next?.map( obj => obj.id() ) )
			return id_list.map( id => this.domain().person( String(id) ) )
		}

		@ $mol_action
		task_create() {
			const obj = this.domain().task( $mol_guid() )
			obj.created( new $mol_time_moment )
			obj.creator( this.domain().person_current() )
			obj.project( this )
			this.task_list( [ ... this.task_list() , obj ] )
			return obj
		}
	}

}
