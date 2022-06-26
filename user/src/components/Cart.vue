<template>
  <div>
    <v-container>

      <p class="display-3 font-weight-light	text-center pa-4">PANIER</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12" >
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-center">ARTICLE</th>
                <th class="text-center">PRIX</th>
                <th class="text-center">QUANTITE</th>
                <th class="text-center">TOTAL</th>
                <th class="text-center"></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <v-list-item
                  key="1"
                  @click=""
                >
                  <v-list-item-avatar>
                    <v-img :src="require('../assets/logo.png')"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >Nom de l'article</v-list-item-title>
                    <v-list-item-subtitle>Nom du restaurant</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item></td>
                <td>40.00 euros</td>
                <td>
                  <v-text-field
                    class="pt-10"
                    label="Outlined"
                    style="width: 80px;"
                    single-line
                    outlined
                    value="2"
                    type="number"
                  ></v-text-field>
                </td>
                <td>80.00 euros</td>
                <td><a>X</a></td>
              </tr>
              <tr>
                <td>
                  <v-list-item
                  key="1"
                  @click=""
                >
                  <v-list-item-avatar>
                    <v-img :src="require('../assets/logo.png')"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >Nom de l'article</v-list-item-title>
                    <v-list-item-subtitle>Nom du restaurant</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item></td>
                <td>40.00 euros</td>
                <td>
                  <v-text-field
                    class="pt-10"
                    label="Outlined"
                    style="width: 80px;"
                    single-line
                    outlined
                    value="2"
                    type="number"
                  ></v-text-field>
                </td>
                <td>80.00 euros</td>
                <td><a>X</a></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightskyblue">
          <p class="headline">Résumé de la commande</p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td>Sous total de la commande</td>
                <td class="text-right" style="width: 50px;">$160.00</td>
              </tr>
              <tr>
                <td>Frais de livraisons</td>
                <td class="text-right" style="width: 50px;">$10.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td class="text-right" style="width: 50px;"><b>$175.00</b></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined>PAYER</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script>
    export default {
        data: () => ({
            rating: 4.5,
            breadcrums: [
                {
                    text: 'Home',
                    disabled: false,
                    href: 'breadcrumbs_home',
                },
                {
                    text: 'Clothing',
                    disabled: false,
                    href: 'breadcrumbs_clothing',
                },
                {
                    text: 'T-Shirts',
                    disabled: true,
                    href: 'breadcrumbs_shirts',
                },
            ],
        })
    }
</script>
