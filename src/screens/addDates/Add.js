import  { useState } from 'react';
import supabase from '../../supabse';
import './add.css'
const Add = () => {
  const [values, setValues] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4:''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    


    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('date')
        .insert([{

          date_name :values.value1,
          date_day:values.value2,
          date_month:values.value3,
          date_year:values.value4,
          
          created_at: new Date().toISOString()
        }])
        .select();

      if (error) throw error;

      
      setValues({ value1: '', value2: '', value3: '', value4:''});
      alert("تمت الاضافة")
      console.log('✅ تم الرفع بنجاح:', data[0]);
    } catch (error) {
        alert("اعد المحاولة من فضلك يا لوليتي")
      console.error('❌ خطأ في الرفع:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="simple-upload">
      <h2
      style={{textAlign:'end'
        ,paddingRight:'8px'
      }}
      >اضافة مناسبة  جديدة امجد وحبيبته لموسة</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="اسم المناسبة"
          value={values.value1}
          onChange={(e) => setValues({...values, value1: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder=" في اي يوم تمت المناسبة"
          value={values.value2}
          onChange={(e) => setValues({...values, value2: e.target.value})}
          
          required
        />
        <input
          type="text"
          placeholder="في اي شهر تمت المناسبة"
          value={values.value3}
          onChange={(e) => setValues({...values, value3: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="في اي عام تمت المناسبة"
          value={values.value4}
          onChange={(e) => setValues({...values, value4: e.target.value})}
          required
        />
        <button className='btnform' type="submit" disabled={loading}>
          {loading ? 'جاري الرفع...' : 'رفع البيانات'}
        </button>
      </form>
      
 
    </div>
  );
};

export default Add;