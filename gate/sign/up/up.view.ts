namespace $.$$ {

	export class $org_gate_sign_up extends $.$org_gate_sign_up {

		@ $mol_mem
		override name_bid( next?: string ) {
			if ( next ) return next
			if ( this.name().length === 0 ) return this.error().required
			return ''
		}

		@ $mol_mem
		override pass_bid( next?: string ) {
			if ( next ) return next
			if ( this.pass().length === 0 ) return this.error().required
			if ( this.pass().length < 8 ) return this.domain().sign().error().wrong_pass
			return ''
		}

		@ $mol_mem
		clear_bid() {
			this.name()
			this.pass()
			this.name_bid( '' )
			this.pass_bid( '' )
		}

		@ $mol_mem
		override submit_enabled() {
			return !this.name_bid() && !this.pass_bid() && this.name().length > 0 && this.pass().length > 0
		}

		override action() {
			const user = this.domain().sign().up( this.name() , this.pass() )
			this.domain().sign().in( user.username() , user.password() )
		}

		override submit_event() {
			try {
				this.action()
			} catch ( err: any ) {
				if ( err instanceof Promise ) this.$.$mol_fail_hidden( err )
				if ( err instanceof Error ) this.name_bid( err.message )
				else this.$.$mol_fail( err )
			}
		}

		auto() {
			this.clear_bid()
		}

	}

}
