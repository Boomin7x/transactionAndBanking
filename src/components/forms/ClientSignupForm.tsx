'use client'

import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Assuming you have an API function to handle signup
async function signupUser(data: any) {
  // Replace with your actual API call
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error('Signup failed')
  return response.json()
}

const validationSchema = Yup.object({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  country_code: Yup.string().required('Country code is required'),
  phone_number: Yup.string()
    .matches(/^\d+$/, 'Phone number must be digits only')
    .required('Phone number is required'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,14}$/,
      'Password must be 7-14 characters with at least one uppercase, one lowercase, and one digit'
    )
    .required('Password is required'),
  password2: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
})

type SignupFormValues = Yup.InferType<typeof validationSchema>

export default function ClientSignupForm() {
  const mutation = useMutation({ mutationFn: signupUser })

  const form = useForm<SignupFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      country_code: 'CM,237',
      phone_number: '',
      password: '',
      password2: '',
    },
  })

  const onSubmit = (values: SignupFormValues) => {
    mutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country code" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="AD,376">AD +376</SelectItem>
                  <SelectItem value="AE,971">AE +971</SelectItem>
                  <SelectItem value="AF,93">AF +93</SelectItem>
                  <SelectItem value="AG,1">AG +1</SelectItem>
                  <SelectItem value="AI,1">AI +1</SelectItem>
                  <SelectItem value="AL,355">AL +355</SelectItem>
                  <SelectItem value="AM,374">AM +374</SelectItem>
                  <SelectItem value="AN,599">AN +599</SelectItem>
                  <SelectItem value="AO,244">AO +244</SelectItem>
                  <SelectItem value="AR,54">AR +54</SelectItem>
                  <SelectItem value="AS,1">AS +1</SelectItem>
                  <SelectItem value="AT,43">AT +43</SelectItem>
                  <SelectItem value="AU,61">AU +61</SelectItem>
                  <SelectItem value="AW,297">AW +297</SelectItem>
                  <SelectItem value="AX,358">AX +358</SelectItem>
                  <SelectItem value="AZ,994">AZ +994</SelectItem>
                  <SelectItem value="BA,387">BA +387</SelectItem>
                  <SelectItem value="BB,1">BB +1</SelectItem>
                  <SelectItem value="BD,880">BD +880</SelectItem>
                  <SelectItem value="BE,32">BE +32</SelectItem>
                  <SelectItem value="BF,226">BF +226</SelectItem>
                  <SelectItem value="BG,359">BG +359</SelectItem>
                  <SelectItem value="BH,973">BH +973</SelectItem>
                  <SelectItem value="BI,257">BI +257</SelectItem>
                  <SelectItem value="BJ,229">BJ +229</SelectItem>
                  <SelectItem value="BL,590">BL +590</SelectItem>
                  <SelectItem value="BM,1">BM +1</SelectItem>
                  <SelectItem value="BN,673">BN +673</SelectItem>
                  <SelectItem value="BO,591">BO +591</SelectItem>
                  <SelectItem value="BQ,599">BQ +599</SelectItem>
                  <SelectItem value="BR,55">BR +55</SelectItem>
                  <SelectItem value="BS,1">BS +1</SelectItem>
                  <SelectItem value="BT,975">BT +975</SelectItem>
                  <SelectItem value="BW,267">BW +267</SelectItem>
                  <SelectItem value="BY,375">BY +375</SelectItem>
                  <SelectItem value="BZ,501">BZ +501</SelectItem>
                  <SelectItem value="CA,1">CA +1</SelectItem>
                  <SelectItem value="CC,61">CC +61</SelectItem>
                  <SelectItem value="CD,243">CD +243</SelectItem>
                  <SelectItem value="CF,236">CF +236</SelectItem>
                  <SelectItem value="CG,242">CG +242</SelectItem>
                  <SelectItem value="CH,41">CH +41</SelectItem>
                  <SelectItem value="CI,225">CI +225</SelectItem>
                  <SelectItem value="CK,682">CK +682</SelectItem>
                  <SelectItem value="CL,56">CL +56</SelectItem>
                  <SelectItem value="CM,237">CM +237</SelectItem>
                  <SelectItem value="CN,86">CN +86</SelectItem>
                  <SelectItem value="CO,57">CO +57</SelectItem>
                  <SelectItem value="CR,506">CR +506</SelectItem>
                  <SelectItem value="CU,53">CU +53</SelectItem>
                  <SelectItem value="CV,238">CV +238</SelectItem>
                  <SelectItem value="CW,599">CW +599</SelectItem>
                  <SelectItem value="CY,357">CY +357</SelectItem>
                  <SelectItem value="CZ,420">CZ +420</SelectItem>
                  <SelectItem value="DE,49">DE +49</SelectItem>
                  <SelectItem value="DJ,253">DJ +253</SelectItem>
                  <SelectItem value="DK,45">DK +45</SelectItem>
                  <SelectItem value="DM,1">DM +1</SelectItem>
                  <SelectItem value="DO,1">DO +1</SelectItem>
                  <SelectItem value="DZ,213">DZ +213</SelectItem>
                  <SelectItem value="EC,593">EC +593</SelectItem>
                  <SelectItem value="EE,372">EE +372</SelectItem>
                  <SelectItem value="EG,20">EG +20</SelectItem>
                  <SelectItem value="ER,291">ER +291</SelectItem>
                  <SelectItem value="ES,34">ES +34</SelectItem>
                  <SelectItem value="ET,251">ET +251</SelectItem>
                  <SelectItem value="FI,358">FI +358</SelectItem>
                  <SelectItem value="FJ,679">FJ +679</SelectItem>
                  <SelectItem value="FK,500">FK +500</SelectItem>
                  <SelectItem value="FM,691">FM +691</SelectItem>
                  <SelectItem value="FO,298">FO +298</SelectItem>
                  <SelectItem value="FR,33">FR +33</SelectItem>
                  <SelectItem value="GA,241">GA +241</SelectItem>
                  <SelectItem value="GB,44">GB +44</SelectItem>
                  <SelectItem value="GD,1">GD +1</SelectItem>
                  <SelectItem value="GE,995">GE +995</SelectItem>
                  <SelectItem value="GF,594">GF +594</SelectItem>
                  <SelectItem value="GG,44">GG +44</SelectItem>
                  <SelectItem value="GH,233">GH +233</SelectItem>
                  <SelectItem value="GI,350">GI +350</SelectItem>
                  <SelectItem value="GL,299">GL +299</SelectItem>
                  <SelectItem value="GM,220">GM +220</SelectItem>
                  <SelectItem value="GN,224">GN +224</SelectItem>
                  <SelectItem value="GP,590">GP +590</SelectItem>
                  <SelectItem value="GQ,240">GQ +240</SelectItem>
                  <SelectItem value="GR,30">GR +30</SelectItem>
                  <SelectItem value="GT,502">GT +502</SelectItem>
                  <SelectItem value="GU,1">GU +1</SelectItem>
                  <SelectItem value="GW,245">GW +245</SelectItem>
                  <SelectItem value="GY,592">GY +592</SelectItem>
                  <SelectItem value="HK,852">HK +852</SelectItem>
                  <SelectItem value="HN,504">HN +504</SelectItem>
                  <SelectItem value="HR,385">HR +385</SelectItem>
                  <SelectItem value="HT,509">HT +509</SelectItem>
                  <SelectItem value="HU,36">HU +36</SelectItem>
                  <SelectItem value="ID,62">ID +62</SelectItem>
                  <SelectItem value="IE,353">IE +353</SelectItem>
                  <SelectItem value="IL,972">IL +972</SelectItem>
                  <SelectItem value="IM,44">IM +44</SelectItem>
                  <SelectItem value="IN,91">IN +91</SelectItem>
                  <SelectItem value="IO,246">IO +246</SelectItem>
                  <SelectItem value="IQ,964">IQ +964</SelectItem>
                  <SelectItem value="IR,98">IR +98</SelectItem>
                  <SelectItem value="IS,354">IS +354</SelectItem>
                  <SelectItem value="IT,39">IT +39</SelectItem>
                  <SelectItem value="JE,44">JE +44</SelectItem>
                  <SelectItem value="JM,1">JM +1</SelectItem>
                  <SelectItem value="JO,962">JO +962</SelectItem>
                  <SelectItem value="JP,81">JP +81</SelectItem>
                  <SelectItem value="KE,254">KE +254</SelectItem>
                  <SelectItem value="KG,996">KG +996</SelectItem>
                  <SelectItem value="KH,855">KH +855</SelectItem>
                  <SelectItem value="KI,686">KI +686</SelectItem>
                  <SelectItem value="KM,269">KM +269</SelectItem>
                  <SelectItem value="KN,1">KN +1</SelectItem>
                  <SelectItem value="KP,850">KP +850</SelectItem>
                  <SelectItem value="KR,82">KR +82</SelectItem>
                  <SelectItem value="KW,965">KW +965</SelectItem>
                  <SelectItem value="KY,1">KY +1</SelectItem>
                  <SelectItem value="KZ,7">KZ +7</SelectItem>
                  <SelectItem value="LA,856">LA +856</SelectItem>
                  <SelectItem value="LB,961">LB +961</SelectItem>
                  <SelectItem value="LC,1">LC +1</SelectItem>
                  <SelectItem value="LI,423">LI +423</SelectItem>
                  <SelectItem value="LK,94">LK +94</SelectItem>
                  <SelectItem value="LR,231">LR +231</SelectItem>
                  <SelectItem value="LS,266">LS +266</SelectItem>
                  <SelectItem value="LT,370">LT +370</SelectItem>
                  <SelectItem value="LU,352">LU +352</SelectItem>
                  <SelectItem value="LV,371">LV +371</SelectItem>
                  <SelectItem value="LY,218">LY +218</SelectItem>
                  <SelectItem value="MA,212">MA +212</SelectItem>
                  <SelectItem value="MC,377">MC +377</SelectItem>
                  <SelectItem value="MD,373">MD +373</SelectItem>
                  <SelectItem value="ME,382">ME +382</SelectItem>
                  <SelectItem value="MF,590">MF +590</SelectItem>
                  <SelectItem value="MG,261">MG +261</SelectItem>
                  <SelectItem value="MH,692">MH +692</SelectItem>
                  <SelectItem value="MK,389">MK +389</SelectItem>
                  <SelectItem value="ML,223">ML +223</SelectItem>
                  <SelectItem value="MM,95">MM +95</SelectItem>
                  <SelectItem value="MN,976">MN +976</SelectItem>
                  <SelectItem value="MO,853">MO +853</SelectItem>
                  <SelectItem value="MP,1">MP +1</SelectItem>
                  <SelectItem value="MQ,596">MQ +596</SelectItem>
                  <SelectItem value="MR,222">MR +222</SelectItem>
                  <SelectItem value="MS,1">MS +1</SelectItem>
                  <SelectItem value="MT,356">MT +356</SelectItem>
                  <SelectItem value="MU,230">MU +230</SelectItem>
                  <SelectItem value="MV,960">MV +960</SelectItem>
                  <SelectItem value="MW,265">MW +265</SelectItem>
                  <SelectItem value="MX,52">MX +52</SelectItem>
                  <SelectItem value="MY,60">MY +60</SelectItem>
                  <SelectItem value="MZ,258">MZ +258</SelectItem>
                  <SelectItem value="NA,264">NA +264</SelectItem>
                  <SelectItem value="NC,687">NC +687</SelectItem>
                  <SelectItem value="NE,227">NE +227</SelectItem>
                  <SelectItem value="NF,672">NF +672</SelectItem>
                  <SelectItem value="NG,234">NG +234</SelectItem>
                  <SelectItem value="NI,505">NI +505</SelectItem>
                  <SelectItem value="NL,31">NL +31</SelectItem>
                  <SelectItem value="NO,47">NO +47</SelectItem>
                  <SelectItem value="NP,977">NP +977</SelectItem>
                  <SelectItem value="NR,674">NR +674</SelectItem>
                  <SelectItem value="NU,683">NU +683</SelectItem>
                  <SelectItem value="NZ,64">NZ +64</SelectItem>
                  <SelectItem value="OM,968">OM +968</SelectItem>
                  <SelectItem value="PA,507">PA +507</SelectItem>
                  <SelectItem value="PE,51">PE +51</SelectItem>
                  <SelectItem value="PF,689">PF +689</SelectItem>
                  <SelectItem value="PG,675">PG +675</SelectItem>
                  <SelectItem value="PH,63">PH +63</SelectItem>
                  <SelectItem value="PK,92">PK +92</SelectItem>
                  <SelectItem value="PL,48">PL +48</SelectItem>
                  <SelectItem value="PM,508">PM +508</SelectItem>
                  <SelectItem value="PN,64">PN +64</SelectItem>
                  <SelectItem value="PR,1">PR +1</SelectItem>
                  <SelectItem value="PS,970">PS +970</SelectItem>
                  <SelectItem value="PT,351">PT +351</SelectItem>
                  <SelectItem value="PW,680">PW +680</SelectItem>
                  <SelectItem value="PY,595">PY +595</SelectItem>
                  <SelectItem value="QA,974">QA +974</SelectItem>
                  <SelectItem value="RE,262">RE +262</SelectItem>
                  <SelectItem value="RO,40">RO +40</SelectItem>
                  <SelectItem value="RS,381">RS +381</SelectItem>
                  <SelectItem value="RU,7">RU +7</SelectItem>
                  <SelectItem value="RW,250">RW +250</SelectItem>
                  <SelectItem value="SA,966">SA +966</SelectItem>
                  <SelectItem value="SB,677">SB +677</SelectItem>
                  <SelectItem value="SC,248">SC +248</SelectItem>
                  <SelectItem value="SD,249">SD +249</SelectItem>
                  <SelectItem value="SE,46">SE +46</SelectItem>
                  <SelectItem value="SG,65">SG +65</SelectItem>
                  <SelectItem value="SH,290">SH +290</SelectItem>
                  <SelectItem value="SI,386">SI +386</SelectItem>
                  <SelectItem value="SJ,47">SJ +47</SelectItem>
                  <SelectItem value="SK,421">SK +421</SelectItem>
                  <SelectItem value="SL,232">SL +232</SelectItem>
                  <SelectItem value="SM,378">SM +378</SelectItem>
                  <SelectItem value="SN,221">SN +221</SelectItem>
                  <SelectItem value="SO,252">SO +252</SelectItem>
                  <SelectItem value="SR,597">SR +597</SelectItem>
                  <SelectItem value="SS,211">SS +211</SelectItem>
                  <SelectItem value="ST,239">ST +239</SelectItem>
                  <SelectItem value="SV,503">SV +503</SelectItem>
                  <SelectItem value="SX,1">SX +1</SelectItem>
                  <SelectItem value="SY,963">SY +963</SelectItem>
                  <SelectItem value="SZ,268">SZ +268</SelectItem>
                  <SelectItem value="TC,1">TC +1</SelectItem>
                  <SelectItem value="TD,235">TD +235</SelectItem>
                  <SelectItem value="TG,228">TG +228</SelectItem>
                  <SelectItem value="TH,66">TH +66</SelectItem>
                  <SelectItem value="TJ,992">TJ +992</SelectItem>
                  <SelectItem value="TK,690">TK +690</SelectItem>
                  <SelectItem value="TL,670">TL +670</SelectItem>
                  <SelectItem value="TM,993">TM +993</SelectItem>
                  <SelectItem value="TN,216">TN +216</SelectItem>
                  <SelectItem value="TO,676">TO +676</SelectItem>
                  <SelectItem value="TR,90">TR +90</SelectItem>
                  <SelectItem value="TT,1">TT +1</SelectItem>
                  <SelectItem value="TV,688">TV +688</SelectItem>
                  <SelectItem value="TW,886">TW +886</SelectItem>
                  <SelectItem value="TZ,255">TZ +255</SelectItem>
                  <SelectItem value="UA,380">UA +380</SelectItem>
                  <SelectItem value="UG,256">UG +256</SelectItem>
                  <SelectItem value="US,1">US +1</SelectItem>
                  <SelectItem value="UY,598">UY +598</SelectItem>
                  <SelectItem value="UZ,998">UZ +998</SelectItem>
                  <SelectItem value="VA,39">VA +39</SelectItem>
                  <SelectItem value="VC,1">VC +1</SelectItem>
                  <SelectItem value="VE,58">VE +58</SelectItem>
                  <SelectItem value="VG,1">VG +1</SelectItem>
                  <SelectItem value="VI,1">VI +1</SelectItem>
                  <SelectItem value="VN,84">VN +84</SelectItem>
                  <SelectItem value="VU,678">VU +678</SelectItem>
                  <SelectItem value="WF,681">WF +681</SelectItem>
                  <SelectItem value="WS,685">WS +685</SelectItem>
                  <SelectItem value="YE,967">YE +967</SelectItem>
                  <SelectItem value="YT,262">YT +262</SelectItem>
                  <SelectItem value="ZA,27">ZA +27</SelectItem>
                  <SelectItem value="ZM,260">ZM +260</SelectItem>
                  <SelectItem value="ZW,263">ZW +263</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter Mobile Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter Password" {...field} />
              </FormControl>
              <FormDescription>
                7-14 characters with at least one uppercase, one lowercase, and one digit
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter Password again" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={mutation.isPending} className="w-full">
          {mutation.isPending ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </form>
    </Form>
  )
}
