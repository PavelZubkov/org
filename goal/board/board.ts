namespace $.$$ {

	export class $org_goal_borad extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $org_goal_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_goal_board' ).doc( this.id() )
		}

		title( next?: string ) {
			return this.state().sub( 'title' ).text( next )
		}

		description( next?: string ) {
			return this.state().sub( 'description' ).text( next )
		}

	}

}
