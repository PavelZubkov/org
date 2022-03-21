namespace $.$$ {

	export class $org_goal_space extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $org_goal_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_goal_space' ).doc( this.id() )
		}

		title( next?: string ) {
			return this.state().sub( 'title' ).text( next )
		}

		image( next?: string ) {
			return String( this.state().sub( 'image' ).value( next ) ?? '' )
		}

		person_list( next?: $org_goal_person[] ) {
			const id_list = this.state().sub( 'person_list' ).list( next && next.map( obj => obj.id() ) )
			return id_list.map( id => this.domain().person( String(id) ) )
		}

		project_list( next?: $org_goal_project[] ) {
			const id_list = this.state().sub( 'project_list' ).list( next && next.map( obj => obj.id() ) )
			return id_list.map( id => this.domain().person( String(id) ) )
		}

	}

}
