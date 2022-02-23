namespace $ {
	export class $org_gate extends $mol_book2_catalog {
		
		/**
		 * ```tree
		 * domain $org_gate_domain
		 * ```
		 */
		@ $mol_mem
		domain() {
			const obj = new this.$.$org_gate_domain()
			
			return obj
		}
		
		/**
		 * ```tree
		 * menu_title @ \Gate
		 * ```
		 */
		menu_title() {
			return this.$.$mol_locale.text( '$org_gate_menu_title' )
		}
		
		/**
		 * ```tree
		 * param \gate
		 * ```
		 */
		param() {
			return "gate"
		}
		
		/**
		 * ```tree
		 * spreads *
		 * 	sign_in <= Sign_in
		 * 	sign_up <= Sign_up
		 * ```
		 */
		spreads() {
			return {
				sign_in: this.Sign_in(),
				sign_up: this.Sign_up()
			}
		}
		
		/**
		 * ```tree
		 * Sign_in $org_gate_sign_in domain <= domain
		 * ```
		 */
		@ $mol_mem
		Sign_in() {
			const obj = new this.$.$org_gate_sign_in()
			
			obj.domain = () => this.domain()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Sign_up $org_gate_sign_up domain <= domain
		 * ```
		 */
		@ $mol_mem
		Sign_up() {
			const obj = new this.$.$org_gate_sign_up()
			
			obj.domain = () => this.domain()
			
			return obj
		}
	}
	
}

