namespace $.$$ {

	export class $org_gate_sign_in extends $.$org_gate_sign_in {

		@ $mol_action
		override submit_event() {
			const user = this.domain().user().find( this.name() )
			if ( !user ) {
				this.$.$mol_fail(new Error('User not found'))
			}
			this.domain().sign().in( user! )
		}

	}

}
