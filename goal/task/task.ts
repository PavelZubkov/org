namespace $.$$ {

	export class $org_goal_task extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $org_goal_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_goal_task' ).doc( this.id() )
		}

		title( next?: string ) {
			return this.state().sub( 'title' ).text( next )
		}

		description( next?: string ) {
			return this.state().sub( 'description' ).text( next )
		}

		created( next?: $mol_time_moment ) {
			const val = this.state().sub( 'created' ).value(next && next.toString())
			return new $mol_time_moment( val ? String(val) : undefined )
		}

		creator( next?: $org_goal_person ) {
			const id = this.state().sub( 'creator' ).value(next && next.id())
			return this.domain().person( String(id) )
		}

		executor( next?: $org_goal_person ) {
			const id = this.state().sub( 'executor' ).value(next && next.id())
			return this.domain().person( String(id) )
		}

		project( next?: $org_goal_project ) {
			const id = this.state().sub( 'project' ).value(next && next.id())
			return this.domain().project().item( String(id) )
		}

		sub( next?: $org_goal_task[] ) {
			const id_list = this.state().sub( 'sub' ).list( next && next.map( obj => obj.id() ) )
			return id_list.map( id => this.domain().task( String(id) ) )
		}
	}

}
